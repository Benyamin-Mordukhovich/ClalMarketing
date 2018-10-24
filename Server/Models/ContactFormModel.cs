using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Server.Models
{
    public class ContactFormModel
    {
        [Required]
        public string CompanyName { get; set; }
        [Required]
        public string PrivateCompany { get; set; }
        [Required]
        public string TransactionsOption { get; set; }
        [Required]
        public string CustomerName { get; set; }
        [Required]
        public string Role { get; set; }
        [Required]
        public string Phone { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Details { get; set; }

    }
}