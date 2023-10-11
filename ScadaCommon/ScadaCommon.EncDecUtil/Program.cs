using Scada;

if (args.Length == 0) return;

var str = ScadaUtils.Encrypt(args[0]);

Console.WriteLine(str);
