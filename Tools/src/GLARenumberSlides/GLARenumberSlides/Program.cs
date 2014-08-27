using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace GLARenumberSlides
{
    class Program
    {
        static void Main(string[] args)
        {
            List<string> slideHtmls = new List<string>();

            string top = "outline.html";

            string[] lines = null;
            lines = File.ReadAllLines(top);
            string[] PTxtList = Array.FindAll(lines, element => element.Trim().StartsWith("<div id=PPTP", StringComparison.Ordinal));

            Directory.CreateDirectory("rename");
            foreach (string s in PTxtList)
            {
                int index = Array.FindIndex(lines, element => element.Contains(s));
                string parse = s.Trim();
                // This needs to be changed if we're dealing with over 100 slides
                parse = parse.Substring(12, 2);
                parse = parse.Trim();

                if (parse.Length > 1)
                    parse = "00" + parse;
                else
                    parse = "000" + parse;

                string html = lines[index + 1].Trim();
                html = html.Substring(html.IndexOf("GoToSld('") + 9, 14).Trim();
                slideHtmls.Add(html);

                string ren = "slide" + parse + ".html";
                File.Copy(html, "rename/" + ren, true);

                Console.WriteLine("Copied " + html + " to /rename/" + ren);
            }
            //Remove the old slides to make room for the new ones
            foreach (string s in slideHtmls)
            {
                File.Delete(s);
            }
            foreach (string s in Directory.GetFiles("rename"))
            {
                Console.WriteLine("Copied " + s + " to " + s.Substring(7));
                File.Copy(s, s.Substring(7));
            }
            Directory.Delete("rename", true);

            Console.WriteLine("Done.");
            Console.ReadLine();
        }


    }
}
