using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace MLAScriptStrip
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Number to loop: ");
            int num = int.Parse(Console.ReadLine());

            for (int i = 1; i < num; ++i)
            {
                string slide = "";
                if (i < 10)
                    slide = "000" + i;
                else if (i >= 10 && i < 100)
                    slide = "00" + i;
                else if (i >= 100)
                    slide = "0" + i;

                slide = "slide" + slide;
                string[] lines = null;
                try
                {
                    string file = slide + ".html";
                    lines = File.ReadAllLines(file, Encoding.Default);
                    Console.WriteLine("Parsing slide #" + i);
                    int toRemove = Array.FindIndex<string>(lines, element => element.StartsWith("if( !IsNts() ) Redirect( \"PPTSld\" );", StringComparison.Ordinal));
                    if (toRemove != -1)
                    {
                        lines[toRemove] = "";
                        File.WriteAllLines(file, lines, Encoding.Default);
                    }
                    else
                        Console.WriteLine("\tNot found. Skipping.");
                }
                catch (FileNotFoundException e)
                {
                    Console.WriteLine(i + " not found.");
                }
                //Console.WriteLine(slide);
            }

            Console.WriteLine("Done.");
            Console.ReadLine();
        }

        public static Encoding GetEncoding(string filename)
        {
            // Read the BOM
            var bom = new byte[4];
            using (var file = new FileStream(filename, FileMode.Open, FileAccess.Read))
            {
                file.Read(bom, 0, 4);
            }

            // Analyze the BOM
            if (bom[0] == 0x2b && bom[1] == 0x2f && bom[2] == 0x76) return Encoding.UTF7;
            if (bom[0] == 0xef && bom[1] == 0xbb && bom[2] == 0xbf) return Encoding.UTF8;
            if (bom[0] == 0xff && bom[1] == 0xfe) return Encoding.Unicode; //UTF-16LE
            if (bom[0] == 0xfe && bom[1] == 0xff) return Encoding.BigEndianUnicode; //UTF-16BE
            if (bom[0] == 0 && bom[1] == 0 && bom[2] == 0xfe && bom[3] == 0xff) return Encoding.UTF32;
            return Encoding.Default;
        }
    }
}
