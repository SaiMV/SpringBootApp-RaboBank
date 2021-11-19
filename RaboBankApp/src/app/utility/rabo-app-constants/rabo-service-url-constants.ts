
/**
 * Class Keeps static radonly string constants used across application.
 */
export class RaboServiceURLConstants {
    private static readonly BASE_URL: string = 'http://localhost:8080/raboservices';
    public static readonly RABO_TRANSACTIONS_RECORDS_ALL: string = RaboServiceURLConstants.BASE_URL+'/records/All'
    public static readonly RABO_TRANSACTIONS_RECORDS_VALID: string = RaboServiceURLConstants.BASE_URL+'/records/Valid'
}

