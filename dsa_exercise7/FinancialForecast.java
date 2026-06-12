package dsa_exercise7;

public class FinancialForecast {
    public static double futureValue(double presentValue , double growthRate , int term)
    {
        if(term==0)
        {
            return presentValue;
        }
        return futureValue(presentValue, growthRate, term - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double presentValue=1000;
        double growthRate=0.20;
        int term=5;

        double futureValue=futureValue(presentValue, growthRate, term);
        System.out.println("Future Value: " + futureValue);
    }
}
