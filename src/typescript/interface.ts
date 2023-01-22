// Application UI Types
export interface ILink {
	id: number;
	title: string;
	href: string;
}

export interface IStatistic {
	id: number;
	title: string;
	value: string | number;
}

export interface ITab {
	id: number;
	title: string;
	isActive: boolean;
	href: string;
}

// Data response formatter
export interface CustomResponse<T> {
	messages: string;
	data: T;
	error: string[];
}

// API Data Types
export interface Student {
	readonly id: string;
	attributes: {
		name: string;
		mobile: string;
		email: string;
		address: string;
		section: string;
		course: string;
		status: number;
		created_at: string;
		updated_at: string;
	};
	relationships: {
		course: unknown;
		attendances: unknown;
		assignments: unknown;
	};
}

export interface Assignment {
	readonly id: string;
	attributes: {
		name: string;
		mark: number;
		updated_at: string;
		created_at: string;
	};
	relationships: {
		type: AssignmentType;
	};
}

export interface AssignmentType {
	readonly id: string;
	attributes: {
		name: string;
		updated_at: string;
		created_at: string;
	};
}

export interface Department {
	readonly id: string;
	attributes: {
		name: string;
		updated_at: string;
		created_at: string;
	};
	relationships: {
		courses: Course[];
	};
}

export interface Course {
	readonly id: string;
	attributes: {
		name: string;
		qualifications: unknown;
		updated_at: string;
		created_at: string;
	};
	relationships: {
		courses_type: unknown;
		department: Department;
		students: Student[];
		assignments: Assignment[];
	};
}

export interface IDepartment extends ILink {}
