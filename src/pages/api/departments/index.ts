import {
	DepartmentsResponseData,
	generateDepartments,
} from '@/data/departments';
import { DATA_LOCATION } from '@/typescript/enum';
import type { CustomResponse } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import type { NextApiRequest, NextApiResponse } from 'next';

const generatedDepartments = generateDepartments(20);

const getDepartments = async (): Promise<
	CustomResponse<DepartmentsResponseData | []>
> => {
	if (process.env.DATA_LOCATION === DATA_LOCATION.EXTERNAL) {
		try {
			const res = await fetch(process.env?.EXTERNAL_API_URL + `/departments`);
			return res.json();
		} catch (err) {
			return generateResponse([], 'External data fetch failed');
		}
	}

	if (process.env.DATA_LOCATION === DATA_LOCATION.INTERNAL) {
		try {
			return generatedDepartments;
		} catch (err) {
			return generateResponse([], 'Internal data fetch failed');
		}
	}

	if (process.env.DATA_LOCATION === DATA_LOCATION.DYNAMIC) {
		try {
			const res = await fetch('http://127.0.0.1:8000/api/departments');
			return res.json();
		} catch (err) {
			return generatedDepartments;
		}
	}

	return generateResponse([], 'Unable to fetch from a data source');
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CustomResponse<DepartmentsResponseData | []> | string>,
) {
	try {
		const departments = await getDepartments();
		res.status(200).json(departments);
	} catch (err) {
		res.status(500).json(generateResponse([], 'Unable to fetch Departments'));
	}
}
