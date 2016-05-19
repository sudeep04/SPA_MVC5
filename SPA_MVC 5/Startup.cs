using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SPA_MVC_5.Startup))]
namespace SPA_MVC_5
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
