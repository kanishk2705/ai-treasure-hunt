// The Secure Database (Hidden from Frontend)
const GAME_DATA = {
    "A": {
        "clues": {
            "1": {"pass": "A-ST@RT#1", "text": "Location: Execute this Python logic: bytes.fromhex('464952535420464C4F4F52204C4142').decode('utf-8'). Passcode: Calculate the determinant of a 3x3 matrix [[5, 2, 1], [3, 9, 4], [6, 1, 8]]. Multiply the final result by 10 and format exactly as 'M@T-[result]!'."},
            "2": {"pass": "M@T-2890!", "text": "Location: Apply ROT13 cipher to this string: 'YVOENEL'. Passcode: Calculate the sum of the series Σ(i^2 + 3i) from i=1 to i=100. Divide the final answer by 100. Format exactly as 'S3R!ES-[result]'."},
            "3": {"pass": "S3R!ES-3535", "text": "Location: Regex match the only valid room from options [3RD_YR_CLS, THIRD_YEAR_CLASSROOM, 3_YEAR_ROOM] that fits this pattern: ^[A-Z]{5}_[A-Z]{4}_[A-Z]{9}$. Passcode: Decimal equivalent of IEEE 754 32-bit hex '0x44340000'? Add 15 to the result. Format exactly as 'FL0@T-[result]$'."},
            "4": {"pass": "FL0@T-735$", "text": "Location: Decode this Base32 string: 'KBRWYZTNNVQXIIDENRXW4==='. Passcode: Evaluate Boolean for A=1, B=0, C=1, D=0: (A NAND B) XOR (C NOR D). If True, result is 9999. If False, 1111. Format exactly as 'L0G!C-[result]^'."},
            "5": {"pass": "L0G!C-9999^", "text": "Final Location: Extract only UPPERCASE letters from: 'Super Secret Server Base Lays Over Coded Keys'. Passcode: Count letters in English translation of Latin phrase 'Veni, vidi, vici'. Multiply by 400. Format exactly as 'R0M3-[result]&'."},
            "final": {"pass": "R0M3-4800&", "text": "🏆 CONGRATULATIONS! You have cracked the final logic. Rush back to the starting desk to claim your victory!"}
        }
    },
    "B": {
        "clues": {
            "1": {"pass": "B-ST@RT#2", "text": "Location: Convert these octal values to ASCII: 107 122 117 125 116 040 106 114 117 117 122 040 114 101 102. Passcode: Complete bipartite graph K_m,n has 45 edges. If m=5, what is n? Passcode is n^4. Format exactly as 'GR@PH-[result]*'."},
            "2": {"pass": "GR@PH-6561*", "text": "Location: Strip numbers/spaces from 'S3E2C1O4N5D Y7E8A0R C9L2A3S5S'. Passcode: Calculate Levenshtein distance between 'ALGORITHM' and 'LOGARITHM'. Multiply by 1024. Format exactly as 'L3V-[result]~'."},
            "3": {"pass": "L3V-3072~", "text": "Location: Decode URL encoded string: %4C%49%42%52%41%52%59. Passcode: What is the exact Unix timestamp for January 1, 1970, at 01:00:00 UTC? Format exactly as 'EP0CH-[result]?'."},
            "4": {"pass": "EP0CH-3600?", "text": "Location: What is the 3-word name of the classroom representing the final stage of 4-year B.E CSE? Passcode: Evaluate matrix multiplication of [[2, 0], [1, 3]] and [[1, 2], [0, 1]]. Sum all 4 elements, multiply by 800. Format exactly as 'D!M-[result]#'."},
            "5": {"pass": "D!M-9600#", "text": "Final Location: Decode Morse code: ... ... ... / -... .-.. --- -.-. -.- . Final Passcode: Standard port for HTTPS is X, SSH is Y, DNS is Z. Calculate (X * Y) + Z + 1000. Format exactly as 'N3T-[result]@'."},
            "final": {"pass": "N3T-10799@", "text": "🏆 CONGRATULATIONS! You have cracked the final logic. Rush back to the starting desk to claim your victory!"}
        }
    },
    "C": {
        "clues": {
            "1": {"pass": "C-ST@RT#3", "text": "Execute Python logic: ''.join([chr(x ^ 42) for x in [108, 99, 120, 121, 126, 10, 108, 102, 101, 101, 120, 10, 102, 107, 104]]) Passcode: Find the total number of digits in 2 to the power of 1000, and multiply it by 14. Format exactly as 'B!T-[result]$'."},
            "2": {"pass": "B!T-4228$", "text": "Location: Reverse Hex string and decode to ASCII: 4C 4C 45 43 20 54 4E 45 4D 45 43 41 4C 50. Passcode: Find the 100th Fibonacci number. Take last 4 digits. Format exactly as 'F!B-[result]%'."},
            "3": {"pass": "F!B-5075%", "text": "Linux cron scheduled as '15 14 1 * *'. Total minutes from start of non-leap year until first execution, multiplied by 6. Format exactly as 'CR0N-[result]^'. Location: Decode binary: 01010011 01000101 01000011 01001111 01001110 01000100 00100000 01011001 01000101 01000001 01010010"},
            "4": {"pass": "CR0N-5130^", "text": "Location: Extract UPPERCASE letters from 'yRaAwbRwcBcIvL' and reverse them. Passcode: IPv4 is 192.168.1.130/28. Find broadcast address. Take last octet, multiply by 20. Format exactly as 'S0B-[result]&'."},
            "5": {"pass": "S0B-2860&", "text": "Final destination: Go back to where it all began. Passcode: SHA-256 hash of 'admin'. Look at first 10 characters of hex digest. Sum all NUMBERS in those 10 characters, multiply by 100. Format exactly as 'H@SH-[result]*'."},
            "final": {"pass": "H@SH-4600*", "text": "🏆 CONGRATULATIONS! You have cracked the final logic. Rush back to the starting desk to claim your victory!"}
        }
    },
    "D": {
        "clues": {
            "1": {"pass": "D-ST@RT#4", "text": "Decode the following Caesar cipher with a shift of +4: T P E G I Q I R X L E P P Passcode: Sum of ASCII values of 'KALAKKAD' multiplied by 3. Format exactly as '@SC-[result]!'."},
            "2": {"pass": "@SC-1692!", "text": "SQL: Table A has 45 rows, Table B has 102 rows. Cross join total rows? Subtract 50. Format exactly as 'SQL-[result]#'. Location: Caesar cipher shift -5 to 'QNGWFWD'."},
            "3": {"pass": "SQL-4540#", "text": "Regex match: ^[A-Z]{5}_[A-Z]{4}_[A-Z]{3}$ -> Options: [FIRST_YEAR_LAB, THIRD_YEAR_CLS, FINAL_YEAR_CLS, SSS_BLOCK_HALL]. Passcode: Convert octal 7452 to decimal. Format exactly as '0CT-[result]$'."},
            "4": {"pass": "0CT-3882$", "text": "Passcode: Evaluate definite integral of f(x) = 3x^2 from x=0 to x=10. Format exactly as '!NT-[result]%'. Location: Decode Base32: M5SXI3TBEBWW64TFMQQQ===="},
            "5": {"pass": "!NT-1000%", "text": "Final Task: Return to ceremony hall. Passcode: HTTP status code for 'I am a teapot'? Multiply by 10. Format exactly as 'HTTP-[result]^'."},
            "final": {"pass": "HTTP-4180^", "text": "🏆 CONGRATULATIONS! You have cracked the final logic. Rush back to the starting desk to claim your victory!"}
        }
    }
};

exports.handler = async function(event, context) {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const body = JSON.parse(event.body);
        const track = body.track;
        const clue = body.clue;
        const userPasscode = (body.passcode || "").trim().toUpperCase();

        if (GAME_DATA[track] && GAME_DATA[track].clues[clue]) {
            const correctPasscode = GAME_DATA[track].clues[clue].pass;
            
            if (userPasscode === correctPasscode) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ success: true, text: GAME_DATA[track].clues[clue].text })
                };
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: false })
        };
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: 'Server Error' }) };
    }
};