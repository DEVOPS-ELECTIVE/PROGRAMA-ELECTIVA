amespace SGR.Domain.Entities.Payment
{
    public class Payment
    {
        public int IdPayment { get; set; }
        public int IdOrder { get; set; }
        public double Amount { get; set; }
        public string? Method { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
