using Application.Customers;

namespace Application.Documents;

public class DocumentDto
{
        public Guid Id { get; set; }
        public string Type { get; set; }

        public int CustomerId { get; set; }
        public string Number { get; set; }
        public DateOnly Date { get; set; } 
        // Lines
        public IEnumerable<DocumentLineDto> DocumentLines { get; set; } = new List<DocumentLineDto>();
}
