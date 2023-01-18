package com.example.exception;

public class EmptyInputException extends RuntimeException{

	/**
	 * 
	 */
	private static final long serialVersionUID = 6383968873144774710L;
	private String ErrorCode;
	private String Message;
	public String getErrorCode() {
		return ErrorCode;
	}
	public void setErrorCode(String errorCode) {
		ErrorCode = errorCode;
	}
	public String getMessage() {
		return Message;
	}
	public void setMessage(String message) {
		Message = message;
	}
	public EmptyInputException(String errorCode, String message) {
		super();
		ErrorCode = errorCode;
		Message = message;
	}
	public EmptyInputException() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}
