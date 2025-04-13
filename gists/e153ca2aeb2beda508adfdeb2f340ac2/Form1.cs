namespace winformwebview2;

public partial class Form1 : Form
{
    public Form1()
    {
        InitializeComponent();

        var webView2 = new Microsoft.Web.WebView2.WinForms.WebView2
        {
            Dock = DockStyle.Fill
        };
        this.Controls.Add(webView2);

        webView2.CoreWebView2InitializationCompleted += (obj, eventArgs) =>
        {
            webView2.NavigateToString(this.Html);
        };

        webView2.NavigationCompleted += (obj, eventArgs) =>
        {
            webView2.CoreWebView2.AddHostObjectToScript("bridge", new Bridge());
        };

        webView2.EnsureCoreWebView2Async();
    }

    private readonly string Html = """
        <!DOCTYPE html>

        <button>Post data</button>

        <script type="module">
            document.querySelector("button").onclick = async () => {
                console.log(await chrome.webview.hostObjects.bridge.foo())
            }
        </script>
    """;
}
