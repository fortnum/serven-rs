using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.DependencyInjection;
using Scada.Web.Plugins;
using Scada.Web.Services;
using System.Diagnostics.Metrics;
using System.Text;

namespace Scada.Web.Plugins.ServenViewExplorerPlugin;

public class ServenViewExplorerPluginLogic : PluginLogic, IPageFilter, IResultFilter, IResourceFilter
{
    public ServenViewExplorerPluginLogic(IWebContext webContext) : base(webContext)
    {
    }

    public override void AddFilters(FilterCollection filters)
    {
        base.AddFilters(filters);

        filters.Add<ServenViewExplorerPluginLogic>();
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
}