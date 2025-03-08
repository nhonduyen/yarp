using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApi2.Model;

namespace WebApi2.Controllers
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
                From = "from api2"
            };
            return Ok(result);
        }

        [HttpPost]
        public ActionResult GenerateNumber([FromBody] GenerateNumberRequest request)
        {
            var result = new GetNumberResponse
            {
                Result = Random.Shared.Next(0, request.Number),
                From = "from api2"
            };
            return Ok(result);
        }
    }
}
