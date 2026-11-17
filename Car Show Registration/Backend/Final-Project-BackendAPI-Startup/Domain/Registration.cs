namespace Domain;

public enum RegistrationType
{
    Exhibitor,
    Competitor,
    VIP
}

public enum Status
{
    Pending,
    Confirmed,
    CheckedIn,
    Cancelled
}

public class Registration
{
    public string RegistrationNumber { get; set; } = string.Empty;
    public DateTime RegistrationDate { get; set; }
    public string ParticipantName { get; set; } = string.Empty;
    public string ContactNumber { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Address { get; set; } = string.Empty;
    public string CarMakeModel { get; set; } = string.Empty;
    public string PlateNumber { get; set; } = string.Empty;
    public RegistrationType RegistrationType { get; set; }
    public Status Status { get; set; } = Status.Pending;
    public decimal RegistrationFee { get; set; }
    public decimal AmountPaid { get; set; }
}