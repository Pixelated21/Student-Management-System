import {
	AssignmentResponseData,
	generateAssignments,
} from '@/data/assignments';
import { DATA_LOCATION, HTTP_STATUS } from '@/typescript/enum';
import type { CustomResponse } from '@/typescript/interface';
import { generateResponse } from '@/utils/generateResponse';
import type { NextApiRequest, NextApiResponse } from 'next';

const generatedAssignments = generateAssignments(20);

const getAssignments = async (
	id: string | string[] | undefined,
): Promise<CustomResponse<AssignmentResponseData | []>> => {
	if (process.env.DATA_LOCATION === DATA_LOCATION.EXTERNAL) {
		try {
			const res = await fetch(
				process.env?.EXTERNAL_API_URL + `/assignments/${id}/all`,
			);
			if (res.status === HTTP_STATUS.OK) {
				return res?.json();
			}

			if (res.status === HTTP_STATUS.NOT_FOUND) {
				return generateResponse([], 'Assignment Not Found');
			}
		} catch (err) {
			return generateResponse([], 'External data fetch failed');
		}
	}
	if (process.env?.DATA_LOCATION === DATA_LOCATION.INTERNAL) {
		try {
			return generatedAssignments;
		} catch (err) {
			return generateResponse([], 'Internal data fetch failed');
		}
	}
	if (process.env?.DATA_LOCATION === DATA_LOCATION.DYNAMIC) {
		try {
			const res = await fetch(
				process.env?.EXTERNAL_API_URL + `/assignments/${id}/all`,
			);
			return res.json();
		} catch (err) {
			return generatedAssignments;
		}
	}

	return generateResponse([], 'Unable to fetch from a data source');
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<CustomResponse<AssignmentResponseData | []> | string>,
) {
	const { id } = req.query;

	try {
		const assignments = await getAssignments(id);
		res.status(200).json(assignments);
	} catch (err) {
		res.status(500).json(generateResponse([], 'Unable to fetch Assignments'));
	}
}
