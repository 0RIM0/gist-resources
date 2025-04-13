using System.Runtime.InteropServices;

namespace winformwebview2
{
    [ClassInterface(ClassInterfaceType.AutoDual)]
    [ComVisible(true)]
    public class Bridge
    {
        public string foo()
        {
            return "bar";
        }
    }
}
