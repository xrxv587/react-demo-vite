export const successMaker = (data: any) => {
	return {
		code: 200,
		success: true,
		message: 'success',
		data
	};
}

export const errorMaker = (reason: string, code = 500) => {
	return {
		code,
		success: false,
		message: reason
	}
}