# Caesar-cipher-CLI-tool

The application is used to encrypt and decrypt using the 
Caesar cipher
Atbash cipher
ROT-8 as variation of ROT-13.
It transform only latin letters.

## How to install

1. Download or clone this repository
2. Change directory to `"Caesar-cipher-CLI-tool"`
3. Install dependencies.

`npm i` or `npm install`

## How to use

CLI tool accepts 3 options (short alias and full name):

-c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
X is a cipher mark:
C is for Caesar cipher (with shift 1)
A is for Atbash cipher
R is for ROT-8 cipher
Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
1 is for encoding
0 is for decoding
-i, --input: a path to input file
-o, --output: a path to output file
For example, config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

## Examples:

* `$ node index   -c "C1-C1-R0-A" -i "./input.txt" -o "./output.txt"

* `$ node index   --config "C1-C0-A-R1-R0-A-R0-R0-C1-A" -i ./input.txt -o output.txt

* `$ node index   -c A-A-A-R1-R0-R0-R0-C1-C1-A --input input.txt 

* `$ node index   -c C1-R1-C0-C0-A-R0-R1-R1-A-C1

