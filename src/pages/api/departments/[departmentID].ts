import {
	DepartmentResponseData,
	DepartmentsResponseData,
} from '@/data/departments';
import { DATA_LOCATION, HTTP_STATUS } from '@/typescript/enum';
import type { CustomResponse, Department } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import type { NextApiRequest, NextApiResponse } from 'next';

const internalDepartmentIDFetch = async (
	departmentID: string | string[] | undefined,
): Promise<
	CustomResponse<DepartmentsResponseData | DepartmentResponseData | []>
> => {
	const res = await fetch(process.env?.INTERNAL_API_URL + `/departments`);
	const data = await res.json();

	if (!data) {
		return generateResponse([], 'Department Not Found');
	}

	let departments: Department[] = data?.data?.departments;

	if (!departments || departments.length < 0) {
		return generateResponse([], 'Department Not Found');
	}

	let department: Department[] | Department = departments.filter(
		department => department.dept_id === departmentID,
	);

	if (!department[0]) {
		return generateResponse([], 'Department Not Found');
	}

	return generateResponse(
		{ department: department[0] },
		'Department Retrieved Successfully',
	);
};

const getDepartments = async (
	departmentID: string | string[] | undefined,
): Promise<
	CustomResponse<DepartmentsResponseData | DepartmentResponseData | []>
> => {
	if (process.env.DATA_LOCATION === DATA_LOCATION.EXTERNAL) {
		try {
			const res = await fetch(
				process.env?.EXTERNAL_API_URL + `/departments/${departmentID}`,
			);

			if (res.status === HTTP_STATUS.OK) {
				return res?.json();
			}

			if (res.status === HTTP_STATUS.NOT_FOUND) {
				return generateResponse([], 'Department Not Found');
			}
		} catch (err) {
			return generateResponse([], 'External data fetch failed');
		}
	}
	if (process.env?.DATA_LOCATION === DATA_LOCATION.INTERNAL) {
		try {
			return internalDepartmentIDFetch(departmentID);
		} catch (err) {
			return generateResponse([], 'Internal data fetch failed');
		}
	}
	if (process.env?.DATA_LOCATION === DATA_LOCATION.DYNAMIC) {
		try {
			const res = await fetch(
				process.env?.EXTERNAL_API_URL + `/departments/${departmentID}`,
			);
			return res.json();
		} catch (err) {
			return internalDepartmentIDFetch(departmentID);
		}
	}

	return generateResponse([], 'Unable to fetch from a data source');
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<
		| CustomResponse<DepartmentsResponseData | DepartmentResponseData | []>
		| string
	>,
) {
	const { departmentID } = req.query;

	try {
		const departments = await getDepartments(departmentID);
		res.status(200).json(departments);
	} catch (err) {
		res.status(500).json(generateResponse([], 'Unable to fetch Departments'));
	}
}
