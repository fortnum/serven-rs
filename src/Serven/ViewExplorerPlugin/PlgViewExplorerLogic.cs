using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Scada.Web.Plugins;
using Scada.Web.Services;
using System.Diagnostics.Metrics;
using System.Text;
namespace Scada.Web.Plugins.PlgServenViewExplorer;

public class PlgServenViewExplorerLogic : PluginLogic, IPageFilter, IResultFilter, IResourceFilter
{
    public PlgServenViewExplorerLogic(IWebContext webContext) : base(webContext)
    {
        webContext.Log.WriteLine("Hello!");
    }

    public override string Code => "PlgServenViewExplorer";

    public override void AddFilters(FilterCollection filters)
    {
        base.AddFilters(filters);

        filters.Add<PlgServenViewExplorerLogic>();
    }

    public override void AddServices(IServiceCollection services)
    {
        base.AddServices(services);
    }

    public void OnPageHandlerSelected(PageHandlerSelectedContext context)
    {

    }

    public void OnPageHandlerExecuting(PageHandlerExecutingContext context)
    {
    }

    public void OnPageHandlerExecuted(PageHandlerExecutedContext context)
    {

    }

    Stream _prevStream;

    public void OnResultExecuting(ResultExecutingContext context)
    {
        var response = context.HttpContext.Response;
        _prevStream = response.Body;
        //response.Body = new MemoryStream();
    }

    public void OnResultExecuted(ResultExecutedContext context)
    {
        var response = context.HttpContext.Response;
        //response.Body.Position = 0;
        //var str = new StreamReader(response.Body, Encoding.UTF8).ReadToEnd();
    }

    public void OnResourceExecuting(ResourceExecutingContext context)
    {
    }

    public void OnResourceExecuted(ResourceExecutedContext context)
    {
    }

    public override ICollection<string> ScriptUrls => new string[] {
        "/plugins/@serven/viewExplorerPlugin/react.development.js",
        "/plugins/@serven/viewExplorerPlugin/react-dom.development.js",
        "/plugins/@serven/viewExplorerPlugin/main.js" };

    //public override string ClientScript => "(function f(s) { $.getScript(s).fail( () => setTimeout(() => f(s), 1000) ) })('/plugins/@serven/viewExplorerPlugin/main.js')";
}
