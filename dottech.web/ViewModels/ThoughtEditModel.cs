using System;

namespace dottech.web.ViewModels
{
    public class ThoughtEditModel
    {
        public Guid Id { get; set; }
        public string URI { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime CreationDate { get; set; }
    }
}
