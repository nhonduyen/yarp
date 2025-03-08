using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi1.Model;

namespace WebApi1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        public HomeController() { }

        [HttpGet] 
        public ActionResult Index() 
        {
            var result = new GetNumberResponse
            {
                Result = Random.Shared.Next(0, int.MaxValue),
                From = "from api1"
            };
            return Ok(result);
        }

        [HttpPost]
        public ActionResult GenerateNumber([FromBody] GenerateNumberRequest request)
        {
            var result = new GetNumberResponse
            {
                Result = Random.Shared.Next(0, request.Number),
                From = "from api1"
            };
            return Ok(result);
        }
    }
}
