package com.billingreports.service.aws;

import com.billingreports.entities.aws.Aws;
import com.billingreports.entities.aws.AwsAggregateResult;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

public interface AwsService {
//    public Aws save(Aws aws);

    // Get Details Methods
    public List<Aws> getAllDataByDateRange(String startDate, String endDate);

    public List<Aws> getBillingDetailsForDuration(int months);

    public List<Aws> getBillingDetailsForDuration(String service, int months);

    public List<Aws> getDataByAccountNameAndDateRange(String accountName, String startDate, String endDate);

    public List<Aws> getDataByAccountNameAndDuration(String accountName, int months);

    public List<Aws> getDataByServiceAndDateRange(String service, String startDate, String endDate);

    public List<Aws> getDataByAccountNameAndServiceAndDuration(String accountName, String service, int months);

    public List<Aws> getDataByAccountNameAndServiceAndDateRange(String accountName, String service, String startDate, String endDate);

    //Get All Details
    public List<Aws> getBillingDetails(String accountName, String serviceName, String startDate, String endDate, Integer months);

    // Get Unique Services Method
    public String[] getUniqueServicesAsArray(String accountName);

    public String[] getUniqueAccountsAsArray();

    //Get All Services Method
    public List<Aws> getAllServices();

    //Get Count of Data
    public Long getCountOfData();

    // Get Billing Period Method
    public List<Map<String, Object>> generateBillingPeriod(String startDate, String endDate, Integer months);

    // Get Monthly Total Bills
    List<Map<String, BigDecimal>> calculateMonthlyTotalBills(List<Aws> billingDetails);

    // Get Top 5 Services
    public List<AwsAggregateResult> getServiceTopFiveTotalCosts(String accountName, String startDate, String endDate, Integer months);

    public List<Aws> getBillingDetailsUsingRangeAndDuration(String accountName, String startDate, String endDate, Integer months);
}
