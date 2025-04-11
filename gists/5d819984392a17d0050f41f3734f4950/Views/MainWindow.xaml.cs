namespace winui3webview2.Views
{
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            this.InitializeComponent();

            this.Closed += (obj, eventArgs) =>
            {
                if (this.webView2 != null)
                {
                    this.webView2.Close();
                }
            };

            this.webView2.Source = new Uri("https://www.google.com/");
        }
    }
}
