package com.cts.rabobank.models;

public class CustomerStatements {
	
	/**
	 * 
	 */
	Integer transactionReference;
	
	/**
	 * 
	 */
	String accountNumber;
	
	/**
	 * 
	 */
	String description;
	
	/**
	 * 
	 */
    Double startBalance;
    
    /**
     * 
     */
    Double mutation;
    
    /**
     * 
     */
    Double endBalance;
    
    /**
     * 
     * @return
     */
	public Integer getTransactionReference() {
		return transactionReference;
	}
	
	/**
	 * 
	 * @param transactionReference
	 */
	public void setTransactionReference(Integer transactionReference) {
		this.transactionReference = transactionReference;
	}
	
	/**
	 * 
	 * @return
	 */
	public String getAccountNumber() {
		return accountNumber;
	}
	
	/**
	 * 
	 * @param accountNumber
	 */
	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}
	
	/**
	 * 
	 * @return
	 */
	public String getDescription() {
		return description;
	}
	
	/**
	 * 
	 * @param description
	 */
	public void setDescription(String description) {
		this.description = description;
	}
	
	/**
	 * 
	 * @return
	 */
	public Double getStartBalance() {
		return startBalance;
	}
	
	 /**
	  * 
	  * @param startBalance
	  */
	public void setStartBalance(Double startBalance) {
		this.startBalance = startBalance;
	}
	
	/**
	 * 
	 * @return
	 */
	public Double getMutation() {
		return mutation;
	}
	
	/**
	 * 
	 * @param mutation
	 */
	public void setMutation(Double mutation) {
		this.mutation = mutation;
	}
	
	/**
	 * 
	 * @return
	 */
	public Double getEndBalance() {
		return endBalance;
	}
	
	/**
	 * 
	 * @param endBalance
	 */
	public void setEndBalance(Double endBalance) {
		this.endBalance = endBalance;
	}
	
}
