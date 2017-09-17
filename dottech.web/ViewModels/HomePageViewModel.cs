using System.Collections.Generic;

namespace dottech.web.ViewModels
{
    public class HomePageViewModel
    {
        public IEnumerable<ThoughtViewModel> Feed { get; set; }
    }
}