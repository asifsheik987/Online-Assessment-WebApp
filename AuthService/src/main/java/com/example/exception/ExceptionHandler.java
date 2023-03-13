package com.example.exception;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.lang.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExceptionHandler extends RuntimeException{
	
	private String errorMessage;

}
