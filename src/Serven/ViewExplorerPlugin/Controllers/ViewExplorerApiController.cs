using Microsoft.AspNetCore.Mvc;
using Scada.Web.Services;
using System.Text.Encodings.Web;
using System.Text.Json;
using System.Text.Json.Nodes;
using System.Text.RegularExpressions;
using System.Text.Unicode;

namespace Scada.Web.Plugins.PlgServenViewExplorer;

[ApiController]
[Produces("application/json")]
public class ViewExplorerApiController : ControllerBase
{
    public ViewExplorerApiController(IWebContext webContext)
    {
        webContext.Log.WriteLine("ViewExplorerApiController.ctor!");
    }

    const string _viewMenuDirRelativePath = @"plugins\@serven\viewExplorerPlugin\viewMenu";

    static readonly Regex _regex = new(@"(?:(.+)?[\\\/]|[\\\/]?)(.+,.+?)[\\\/]?$");

    [HttpGet("plugins/@serven/viewExplorerPlugin/viewMenu.json")]
    public JsonResult ViewMenu([FromServices] IWebContext webContext, [FromServices] IUserContext userContext)
    {
        webContext.Log.WriteLine("ViewMenu!");

        var viewMenuDir = Path.Combine(webContext.AppDirs.ExeDir, _viewMenuDirRelativePath);

        viewMenuDir = Regex.Replace(viewMenuDir, "(\\\\|\\/)", $"{Path.DirectorySeparatorChar}");

        var jsonObject = new JsonObject(new Dictionary<string, JsonNode>()
        {
            ["objects"] = new JsonArray(
            Directory.GetDirectories(viewMenuDir, "*", SearchOption.AllDirectories)
            .Select(x => Path.GetRelativePath(viewMenuDir, x))
            .Select(x => _regex.Match(x)).Where(x => x.Success && x.Groups.Count == 3)
            .Select(x => x.Groups.Cast<Group>().Skip(1).Select(x => x.Value).ToArray()).Select(x => (Key: x[1], ParentKey: x[0] == "" ? null : x[0]))
            .Select(x => new JsonObject(new Dictionary<string, JsonNode>()
            {
                ["key"] = x.Key,
                ["parentKey"] = x.ParentKey
            })).ToArray())
        });

        var options = new JsonSerializerOptions() { WriteIndented = true, Encoder = JavaScriptEncoder.Create(UnicodeRanges.All) };

        return new JsonResult(jsonObject, options);
    }
}
