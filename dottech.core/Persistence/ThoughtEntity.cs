using milab.DAL.Persistence;
using System;

namespace dottech.core.Persistence
{
    public class ThoughtEntity : IEntity
    {
        public Guid Id { get; set; }
        public string URI { get; set; }
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime CreationDate { get; set; }
        public bool IsDisabled { get; set; }
    }
}
