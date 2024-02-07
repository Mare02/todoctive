import { NextResponse } from "next/server";

export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly clientMessage: string;

  constructor(statusCode: number, message: string, clientMessage: string = 'An error occurred') {
    super(message);
    this.statusCode = statusCode;
    this.clientMessage = clientMessage;
  }
}

export function handleApiError(error: any) {
  if (error instanceof ApiError) {
    NextResponse.json({ error: error.message }, { status: error.statusCode });
  } else {
    NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}