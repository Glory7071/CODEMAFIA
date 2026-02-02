const motives = [
        "Focus on your goals, the noise doesn't matter. Go for GLORY!",
        "Doubt kills more dreams than failure ever will.",
        "Success is a habit, not an act. Keep practicing!",
        "Consistency is more important than intensity.",
        "Every MCQ brings you closer to your Dream University.",
        "Master the fundamentals, and success will follow."
    ];

    const quizData = {
        "Set 1": { pass: "1234", msg: motives[0], questions: [
            // COMPUTER SCIENCE (1-40)
  { "q": "Algebra: If $x + \frac{1}{x} = 3$, then find the value of $x^4 + \frac{1}{x^4}$.", o: ["A) 81", "B) 47", "C) 49", "D) 51"], "a": 1 },
  { "q": "Factorization: One of the factors of $(x+y)^3 - (x^3+y^3)$ is?", o: ["A) $x^2+y^2$", "B) $3xy$", "C) $x-y$", "D) $x+y$"], "a": 1 },
  { "q": "Quadratic Equations: If the roots of the equation $x^2 - px + q = 0$ differ by unity, then which of the following is true?", o: ["A) $p^2 = 4q + 1$", "B) $p^2 = 4q - 1$", "C) $q^2 = 4p + 1$", "D) $p^2 = q + 4$"], "a": 0 },
  { "q": "Simultaneous Equations: For what value of $k$ will the system of equations $kx + 3y = k-3$ and $12x + ky = k$ have infinitely many solutions?", o: ["A) $k=6$", "B) $k=-6$", "C) $k=0$", "D) $k=1$"], "a": 0 },
  { "q": "Expansions: The coefficient of $x^7$ in the expansion of $(1 + 3x - 2x^3)^{10}$ is?", o: ["A) 0", "B) 620", "C) 210", "D) 120"], "a": 0 },
  { "q": "Factorization: If $x-2$ is a factor of $x^2 + kx + 4$, find the value of $k$.", o: ["A) 4", "B) -4", "C) 2", "D) -2"], "a": 1 },
  { "q": "Quadratic Equations: If $\alpha$ and $\beta$ are the roots of $ax^2 + bx + c = 0$, then find the value of $\frac{1}{\alpha^2} + \frac{1}{\beta^2}$.", o: ["A) $\frac{b^2-2ac}{c^2}$", "B) $\frac{b^2+2ac}{c^2}$", "C) $\frac{b^2-2ac}{a^2}$", "D) $\frac{b^2}{c^2}$"], "a": 0 },
  { "q": "Linear Equations: Solve for $x$ and $y$: $\frac{10}{x+y} + \frac{2}{x-y} = 4$ and $\frac{15}{x+y} - \frac{5}{x-y} = -2$.", o: ["A) $x=3, y=2$", "B) $x=2, y=3$", "C) $x=5, y=5$", "D) $x=4, y=1$"], "a": 0 },
  { "q": "Fundamental Ops: If $a+b+c = 0$, then find the value of $\frac{a^2}{bc} + \frac{b^2}{ca} + \frac{c^2}{ab}$.", o: ["A) 0", "B) 1", "C) 3", "D) -1"], "a": 2 },
  { "q": "Quadratic Equations: Find the value of $k$ for which the quadratic equation $2x^2 - kx + k = 0$ has equal roots.", o: ["A) 0 only", "B) 4 only", "C) 8 only", "D) 0 or 8"], "a": 3 },
  
  { "q": "Set Theory: If $n(A) = 12, n(B) = 15$ and $n(A \cap B) = 7$, then find the value of $n(P(A \Delta B))$ where $P$ is the power set.", o: ["A) $2^{13}$", "B) $2^{20}$", "C) $2^{15}$", "D) $1024$"], "a": 3 },
  { "q": "Elementary Counting: In a group of $60$ people, $25$ read Newspaper A, $26$ read Newspaper B, and $26$ read Newspaper C. If $3$ read all three, $11$ read A and B, $9$ read A and C, and $8$ read B and C, how many read none?", o: ["A) $7$", "B) $8$", "C) $9$", "D) $10$"], "a": 1 },
  { "q": "Cardinality: If $A = \{x : x \text{ is a multiple of } 3, x < 100\}$ and $B = \{x : x \text{ is a multiple of } 5, x < 100\}$, find $n(A \cup B)$.", o: ["A) $52$", "B) $46$", "C) $40$", "D) $45$"], "a": 1 },
  { "q": "P&C: Find the number of ways in which $5$ boys and $5$ girls can be seated in a row such that no two girls sit together.", o: ["A) $5! \times 6!$", "B) $10! - 5!$", "C) $5! \times ^6P_5$", "D) $5! \times 5!$"], "a": 2 },
  { "q": "Combinations: A committee of $5$ is to be formed from $6$ gentlemen and $4$ ladies. In how many ways can this be done if the committee must contain at least one lady?", o: ["A) $198$", "B) $246$", "C) $252$", "D) $442$"], "a": 1 },
  { "q": "Permutations: How many different $4$-letter words can be formed from the letters of the word 'EXAMINATION'?", o: ["A) $2454$", "B) $1200$", "C) $180$", "D) $240$"], "a": 0 },
  { "q": "Intersection: If $A \cap B = \phi$, and $n(A) = 20, n(B) = 30$, find $n(A \Delta B)$.", o: ["A) $10$", "B) $50$", "C) $600$", "D) $25$"], "a": 1 },
  { "q": "Cardinality: If a set $S$ has $n$ elements, the number of its non-empty proper subsets is?", o: ["A) $2^n - 1$", "B) $2^n - 2$", "C) $2^{n-1}$", "D) $n^2 - 1$"], "a": 1 },
  { "q": "Circular Permutation: In how many ways can $6$ people be seated around a circular table if two particular people must always sit together?", o: ["A) $120$", "B) $48$", "C) $24$", "D) $72$"], "a": 1 },
  { "q": "Counting: How many natural numbers between $100$ and $1000$ have at least one digit repeated?", o: ["A) $252$", "B) $648$", "C) $450$", "D) $320$"], "a": 0 }


        ] },
      
        "Set 2": { pass: "1234", msg: motives[1], questions: [

         // COMPUTER SCIENCE (1-40)
           
  { "q": "Coordinate Geometry: Find the angle $\\theta$ between the pair of lines $x^2 - 7xy + 12y^2 = 0$.", o: ["A) $\\tan^{-1}(1/7)$", "B) $\\tan^{-1}(1/13)$", "C) $45^\\circ$", "D) $90^\\circ$"], "a": 0 },
  { "q": "Calculus: Evaluate $\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$.", o: ["A) $0$", "B) $1$", "C) $1/2$", "D) $1/3$"], "a": 2 },
  { "q": "Circles: The number of common tangents to the circles $x^2 + y^2 = 4$ and $x^2 + y^2 - 6x - 8y - 24 = 0$ is?", o: ["A) $1$", "B) $2$", "C) $3$", "D) $4$"], "a": 0 },
  { "q": "Integration: Evaluate $\\int_{0}^{\\pi} \\frac{x \\, dx}{1 + \\sin x}$.", o: ["A) $\\pi$", "B) $\\pi/2$", "C) $2\\pi$", "D) $0$"], "a": 0 },
  { "q": "Coordinate Geometry: The condition that the line $y = mx + c$ is a tangent to the parabola $y^2 = 4ax$ is?", o: ["A) $c = am$", "B) $c = a/m$", "C) $c = a/m^2$", "D) $c = -am$"], "a": 1 },
  { "q": "Calculus: If $f(x) = \\int_{x}^{x^2} \\log t \\, dt$, then find $f'(x)$.", o: ["A) $(2x-1) \\log x$", "B) $4x \\log x - \\log x$", "C) $2x \\log x$", "D) $2x \\log(x^2) - \\log x$"], "a": 3 },
  { "q": "Circles: The area of the circle $x^2 + y^2 - 4x - 6y - 12 = 0$ is?", o: ["A) $25\\pi$", "B) $16\\pi$", "C) $9\\pi$", "D) $5\\pi$"], "a": 0 },
  { "q": "Integration: Find the value of $\\int_{0}^{\\pi/2} \\log(\\tan x) \\, dx$.", o: ["A) $\\pi/2$", "B) $\\pi/4$", "C) $0$", "D) $1$"], "a": 2 },
  { "q": "Coordinate Geometry: The distance between the parallel lines $3x + 4y + 5 = 0$ and $3x + 4y - 10 = 0$ is?", o: ["A) $1$", "B) $2$", "C) $3$", "D) $5$"], "a": 2 },
  { "q": "Limits: Evaluate $\\lim_{x \\to \\infty} \\left( \\frac{x+6}{x+1} \\right)^{x+4}$.", o: ["A) $e^5$", "B) $e^6$", "C) $e$", "D) $e^{-5}$"], "a": 0 },

  { "q": "Logarithms: If $\\log_{10} 2 = 0.3010$ and $\\log_{10} 3 = 0.4771$, find the number of digits in $6^{20}$.", o: ["A) $15$", "B) $16$", "C) $17$", "D) $18$"], "a": 0 },
  { "q": "Progressions: If the $p^{th}, q^{th}$ and $r^{th}$ terms of an A.P. are $a, b, c$ respectively, find the value of $a(q-r) + b(r-p) + c(p-q)$.", o: ["A) $1$", "B) $-1$", "C) $0$", "D) $abc$"], "a": 2 },
  { "q": "Geometric Progression: The sum of an infinite G.P. is $x$ and the common ratio $r$ is such that $|r| < 1$. If the first term is $2$, find the range of $x$.", o: ["A) $x > 1$", "B) $x > 2$", "C) $x > 0$", "D) $x$ can be any real number"], "a": 0 },
  { "q": "Harmonic Progression: If $a, b, c$ are in H.P., then find the value of $\\frac{1}{b-a} + \\frac{1}{b-c}$.", o: ["A) $\\frac{1}{a} + \\frac{1}{c}$", "B) $\\frac{1}{a} - \\frac{1}{c}$", "C) $\\frac{2}{b}$", "D) $0$"], "a": 0 },
  { "q": "Logarithms: If $\\log_y x = (\\log_z y)^2 = (\\log_x z)^3$, then which of the following is true?", o: ["A) $\\log_y x = 1$", "B) $\\log_y x = 1/8$", "C) $\\log_y x = 2$", "D) $\\log_y x = 1/4$"], "a": 0 },
  { "q": "Progressions: Find the $n^{th}$ term of the series $1 + \\frac{4}{5} + \\frac{7}{25} + \\frac{10}{125} + \\dots$.", o: ["A) $\\frac{3n-2}{5^{n-1}}$", "B) $\\frac{3n+1}{5^n}$", "C) $\\frac{2n+1}{5^{n-1}}$", "D) $\\frac{3n-2}{5^n}$"], "a": 0 },
  { "q": "Arithmetic Progression: If the sum of first $n$ terms of an A.P. is $3n^2 + n$, find the common difference $d$.", o: ["A) $3$", "B) $6$", "C) $4$", "D) $2$"], "a": 1 },
  { "q": "Logarithms: Solve for $x$: $\\log_2 (x+5) = 6 - \\log_2 (x-2)$.", o: ["A) $x = 4$ or $x = -7$", "B) $x = 3$", "C) $x = 4$", "D) $x = 7$"], "a": 2 },
  { "q": "Geometric Progression: If $a, b, c$ are in G.P. and $a^x = b^y = c^z$, then $x, y, z$ are in:", o: ["A) A.P.", "B) G.P.", "C) H.P.", "D) None"], "a": 2 },
  { "q": "Progressions: The sum of the first $10$ terms of a series whose $n^{th}$ term is $n(n+1)$ is?", o: ["A) $330$", "B) $440$", "C) $550$", "D) $385$"], "a": 1 }
  
        ] },
       
       
        "Set 3": { pass: "8901", msg: motives[2], questions: [
  
  { "q": "Integration: Evaluate $\\int \\frac{dx}{x(x^n + 1)}$.", o: ["A) $\\frac{1}{n} \\log |\\frac{x^n}{x^n+1}| + C$", "B) $\\log |\\frac{x^n}{x^n+1}| + C$", "C) $\\frac{1}{n} \\log |\\frac{x^n+1}{x^n}| + C$", "D) $n \\log |x^n+1| + C$"], "a": 0 },
  { "q": "Limits: Evaluate $\\lim_{x \\to 0} \\frac{\\int_0^{x^2} \\sin \\sqrt{t} \\, dt}{x^3}$.", o: ["A) $2/3$", "B) $1$", "C) $1/3$", "D) $0$"], "a": 0 },
  { "q": "Integration: Find the value of $\\int_0^{\\pi/2} \\frac{\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$.", o: ["A) $\\pi/2$", "B) $\\pi/4$", "C) $\\pi$", "D) $0$"], "a": 1 },
  { "q": "Limits: Evaluate $\\lim_{x \\to \\infty} \\frac{\\sin x}{x}$.", o: ["A) $1$", "B) $0$", "C) $\\infty$", "D) Does not exist"], "a": 1 },
  { "q": "Integration: The area bounded by the curve $y = \\log x$, x-axis and the ordinate $x = e$ is?", o: ["A) $e$", "B) $1$", "C) $e-1$", "D) $2$"], "a": 1 },
  { "q": "Limits: Find the value of $\\lim_{x \\to 0} \\frac{a^x - b^x}{x}$.", o: ["A) $\\log(a/b)$", "B) $\\log(ab)$", "C) $a/b$", "D) $\\log(b/a)$"], "a": 0 },
  { "q": "Integration: Evaluate $\\int e^x (\\tan x + \\log \\sec x) dx$.", o: ["A) $e^x \\tan x + C$", "B) $e^x \\log \\sec x + C$", "C) $e^x \\sec x + C$", "D) $e^x \\log \\tan x + C$"], "a": 1 },
  { "q": "Limits: Evaluate $\\lim_{x \\to 1} \\frac{x^{15}-1}{x^{10}-1}$.", o: ["A) $1$", "B) $3/2$", "C) $2/3$", "D) $5/3$"], "a": 1 },
  { "q": "Integration: Find $\\int_0^1 \\frac{dx}{\\sqrt{1-x^2}}$.", o: ["A) $\\pi/2$", "B) $\\pi$", "C) $1$", "D) $0$"], "a": 0 },
  { "q": "Limits: Evaluate $\\lim_{x \\to 0} (1+x)^{1/x}$.", o: ["A) $1$", "B) $0$", "C) $e$", "D) $1/e$"], "a": 2 },
  { "q": "Differentiation: If $x^y = e^{x-y}$, then find the value of $\\frac{dy}{dx}$ at $x=1$.", o: ["A) $0$", "B) $1$", "C) $e$", "D) $-1$"], "a": 0 },
  { "q": "Maxima & Minima: The function $f(x) = x^x$ has a local minimum at $x = ?$", o: ["A) $e$", "B) $1/e$", "C) $1$", "D) $\\log e$"], "a": 1 },
  { "q": "Differentiation: If $y = \\tan^{-1} \\left( \\frac{\\cos x + \\sin x}{\\cos x - \\sin x} \\right)$, then $\\frac{dy}{dx}$ is?", o: ["A) $1$", "B) $1/2$", "C) $0$", "D) $-1$"], "a": 0 },
  { "q": "Maxima & Minima: Find the maximum value of $f(x) = \\sin x + \\cos x$.", o: ["A) $1$", "B) $2$", "C) $\\sqrt{2}$", "D) $1/\\sqrt{2}$"], "a": 2 },
  { "q": "Differentiation: If $x = a \\cos^3 \\theta$ and $y = a \\sin^3 \\theta$, then find $\\frac{dy}{dx}$ at $\\theta = \\pi/4$.", o: ["A) $1$", "B) $-1$", "C) $0$", "D) $\\infty$"], "a": 1 },
  { "q": "Maxima & Minima: The maximum area of a rectangle with a perimeter of $20$ cm is?", o: ["A) $20 \\text{ cm}^2$", "B) $25 \\text{ cm}^2$", "C) $100 \\text{ cm}^2$", "D) $50 \\text{ cm}^2$"], "a": 1 },
  { "q": "Differentiation: Find the derivative of $e^{\\sin x}$ with respect to $\\cos x$.", o: ["A) $-e^{\\sin x} \\cot x$", "B) $e^{\\sin x} \\tan x$", "C) $-e^{\\sin x} \\tan x$", "D) $e^{\\sin x} \\cot x$"], "a": 0 },
  { "q": "Maxima & Minima: At what point does the function $f(x) = 2x^3 - 21x^2 + 36x - 20$ have a local maximum?", o: ["A) $x=1$", "B) $x=6$", "C) $x=3$", "D) $x=0$"], "a": 0 },
  { "q": "Differentiation: If $y = \\sqrt{\\sin x + \\sqrt{\\sin x + \\dots \\infty}}$, then $(2y-1)\\frac{dy}{dx}$ is equal to?", o: ["A) $\\sin x$", "B) $\\cos x$", "C) $-\\cos x$", "D) $1$"], "a": 1 },
  { "q": "Maxima & Minima: If $x+y=10$, what is the minimum value of $x^2 + y^2$?", o: ["A) $25$", "B) $50$", "C) $100$", "D) $0$"], "a": 1 }

] },
        "Set 4": { pass: "1234", msg: motives[3], questions: [

  { "q": "Calculus: Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^{x} - e^{-x} - 2x}{x - \\sin x}$.", o: ["A) $1$", "B) $2$", "C) $0$", "D) $1/2$"], "a": 1 },
  { "q": "Continuity: If the function $f(x) = \\frac{\\sqrt{1+kx} - \\sqrt{1-kx}}{x}$ for $x < 0$ and $f(x) = \\frac{2x+1}{x-1}$ for $x \\geq 0$ is continuous at $x=0$, then $k = ?$", o: ["A) $1$", "B) $-1$", "C) $0$", "D) $2$"], "a": 1 },
  { "q": "Calculus: Find the value of $\\lim_{x \\to \\infty} \\left( 1 + \\frac{a}{x} \\right)^x$.", o: ["A) $a^e$", "B) $e^a$", "C) $1$", "D) $0$"], "a": 1 },
  { "q": "Limit: Evaluate $\\lim_{x \\to 0} (\\cos x)^{1/x^2}$.", o: ["A) $e$", "B) $e^{-1}$", "C) $e^{-1/2}$", "D) $1$"], "a": 2 },
  { "q": "Continuity: The function $f(x) = [x]$ (Greatest Integer Function) is discontinuous at:", o: ["A) $x = 0.5$", "B) Every integer point", "C) Only $x = 0$", "D) No point"], "a": 1 },
  { "q": "Calculus: If $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = n a^{n-1}$, then find $\\lim_{x \\to 1} \\frac{x^{15} - 1}{x^{10} - 1}$.", o: ["A) $1.5$", "B) $1$", "C) $15/10$", "D) Both A and C"], "a": 3 },
  { "q": "Continuity: If $f(x) = \\frac{\\sin 3x}{x}$ for $x \\neq 0$ and $f(0) = k$, find $k$ such that $f(x)$ is continuous at $x=0$.", o: ["A) $1$", "B) $3$", "C) $1/3$", "D) $0$"], "a": 1 },
  { "q": "Calculus: Evaluate $\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$.", o: ["A) $1/2$", "B) $1$", "C) $0$", "D) $1/3$"], "a": 0 },
  { "q": "Limit: Find $\\lim_{x \\to 0} \\frac{\\log(1+x)}{x}$.", o: ["A) $e$", "B) $0$", "C) $1$", "D) $\\infty$"], "a": 2 },
  { "q": "Continuity: A function $f(x) = |x|/x$ for $x \\neq 0$ and $f(0) = 0$ is:", o: ["A) Continuous at $x=0$", "B) Discontinuous at $x=0$", "C) Differentiable at $x=0$", "D) Constant"], "a": 1 },
 
  // ... Paste 18 more similar logic questions for Set 4 ...
  { "q": "Coordinate Geometry: Find the angle $\\theta$ between the pair of straight lines represented by the equation $x^2 - 7xy + 12y^2 = 0$.", o: ["A) $\\tan^{-1}(1/7)$", "B) $\\tan^{-1}(1/13)$", "C) $\\tan^{-1}(7/13)$", "D) $45^\\circ$"], "a": 0 },
  { "q": "Set Theory: If $A$ and $B$ are two sets such that $n(A) = 10$ and $n(B) = 15$, then the minimum and maximum number of elements in $A \\cup B$ are?", o: ["A) $10, 25$", "B) $15, 25$", "C) $10, 15$", "D) $15, 20$"], "a": 1 },
  { "q": "Coordinate Geometry: The condition that the line $lx + my + n = 0$ touches the parabola $y^2 = 4ax$ is?", o: ["A) $ln = am^2$", "B) $lm = an^2$", "C) $ln = am$", "D) $am = ln^2$"], "a": 0 },
  { "q": "Set Theory: If $P(A)$ denotes the power set of $A$ and $A = \\phi$, then find the number of elements in $P(P(P(A)))$.", o: ["A) $2$", "B) $4$", "C) $8$", "D) $1$"], "a": 1 },
  { "q": "Coordinate Geometry: The eccentricity of the hyperbola whose latus rectum is $8$ and conjugate axis is equal to half the distance between the foci is?", o: ["A) $4/3$", "B) $4/\\sqrt{3}$", "C) $2/\\sqrt{3}$", "D) $\\sqrt{3}$"], "a": 2 },
  { "q": "Set Theory: In a group of $1000$ people, there are $750$ who can speak Hindi and $400$ who can speak Bengali. If everyone speaks at least one language, how many speak only Hindi?", o: ["A) $150$", "B) $600$", "C) $250$", "D) $400$"], "a": 1 },
  { "q": "Coordinate Geometry: The area of the circle centered at $(1, 2)$ and passing through the focus of the parabola $y^2 = 8x$ is?", o: ["A) $2\\pi$", "B) $3\\pi$", "C) $4\\pi$", "D) $5\\pi$"], "a": 0 },
  { "q": "Set Theory: If $A = \\{1, 2, 3, 4, 5\\}$ and $B = \\{2, 4, 6, 8\\}$, then find the number of elements in $(A \\Delta B) \\times (A \\cap B)$.", o: ["A) $5$", "B) $10$", "C) $15$", "D) $20$"], "a": 1 },
  { "q": "Coordinate Geometry: If the eccentricity of an ellipse is $5/8$ and the distance between its foci is $10$, then find the length of its major axis.", o: ["A) $16$", "B) $20$", "C) $12$", "D) $25$"], "a": 0 },
  { "q": "Set Theory: Which of the following is true for any two sets $A$ and $B$?", o: ["A) $(A \\cup B)' = A' \\cup B'$", "B) $A - B = A \\cap B'$", "C) $A - B = B - A$", "D) $A \\cup A' = \\phi$"], "a": 1 }

        ] },
        "Set 5": { pass: "1234", msg: motives[4], questions: [
            // quizData["Set 5"].questions
           
    // --- DSA ---
  { "q": "Calculus: The function $f(x) = |x-1| + |x-2|$ is not differentiable at which points?", o: ["A) $x=1$ only", "B) $x=2$ only", "C) $x=1$ and $x=2$", "D) Everywhere"], "a": 2 },
  { "q": "Algebra: If $A$ is a $3 \times 3$ matrix such that $|A| = 3$, find the value of $|adj(adj(2A))|$.", o: ["A) $2^{12} \\cdot 3^4$", "B) $2^{12} \\cdot 3^3$", "C) $2^6 \\cdot 3^4$", "D) $2^{18} \\cdot 3^4$"], "a": 0 },
  { "q": "Coordinate Geometry: The locus of the point of intersection of the lines $x \\sqrt{3} - y = 4 \\sqrt{3}k$ and $x \\sqrt{3}k + yk = 4 \\sqrt{3}$ is a/an?", o: ["A) Ellipse", "B) Hyperbola", "C) Parabola", "D) Circle"], "a": 1 },
  { "q": "Integration: Evaluate the integral $\\int_{0}^{\\pi} \\frac{dx}{1 + 2^{\\tan x}}$.", o: ["A) $\\pi$", "B) $\\pi/2$", "C) $\\pi/4$", "D) $0$"], "a": 1 },
  { "q": "Algebra: If $S$ is the sum, $P$ is the product and $R$ is the sum of reciprocals of $n$ terms in a G.P., then $P^2 R^n$ is?", o: ["A) $S^n$", "B) $S^{2n}$", "C) $S/R$", "D) $S^n/R^n$"], "a": 0 },
  { "q": "Probability: A problem is given to three students whose chances of solving it are $1/2, 1/3$ and $1/4$ respectively. What is the probability that the problem is solved?", o: ["A) $1/4$", "B) $1/2$", "C) $3/4$", "D) $1/24$"], "a": 2 },
  { "q": "Coordinate Geometry: The eccentricity of the conic $9x^2 + 4y^2 - 18x - 16y - 11 = 0$ is?", o: ["A) $\\sqrt{5}/3$", "B) $5/9$", "C) $\\sqrt{13}/3$", "D) $2/3$"], "a": 0 },
  { "q": "Set Theory: If $A = \\{x : x^2 - 5x + 6 = 0\\}$ and $B = \\{x : x^2 + x - 6 = 0\\}$, then $n(P(A \\Delta B))$ is?", o: ["A) $4$", "B) $8$", "C) $16$", "D) $32$"], "a": 2 },
  { "q": "Calculus: The slope of the tangent to the curve $y = x^x$ at $x=1$ is?", o: ["A) $0$", "B) $1$", "C) $e$", "D) $\\log e$"], "a": 1 },
  { "q": "Statistics: If the mean of $n$ observations $x_1, x_2, \\dots, x_n$ is $\\bar{X}$, then the mean of $\\frac{x_1}{k}, \\frac{x_2}{k}, \\dots, \\frac{x_n}{k}$ ($k \\neq 0$) is?", o: ["A) $\\bar{X}$", "B) $k\\bar{X}$", "C) $\\bar{X}/k$", "D) $\\bar{X} + k$"], "a": 2 },
    // --- Digital Logic ---
  { "q": "Calculus: The slope of the tangent to the curve $y = \int_{0}^{x} \frac{dt}{1+t^3}$ at $x = 1$ is?", o: ["A) $1/2$", "B) $1$", "C) $1/4$", "D) $2$"], "a": 0 },
  { "q": "Algebra: If $A$ is a $3 \times 3$ matrix such that $|A| = 5$, then the value of $|adj(2A)|$ is?", o: ["A) $100$", "B) $400$", "C) $1600$", "D) $200$"], "a": 2 },
  { "q": "Coordinate Geometry: The equation of the parabola with vertex $(0,0)$ and focus $(0, -2)$ is?", o: ["A) $y^2 = 8x$", "B) $x^2 = -8y$", "C) $x^2 = 8y$", "D) $y^2 = -8x$"], "a": 1 },
  { "q": "Set Theory: If $A$ and $B$ are two sets such that $n(A) = 20, n(B) = 30$ and $n(A \cup B) = 45$, find $n(A \Delta B)$.", o: ["A) $5$", "B) $10$", "C) $40$", "D) $15$"], "a": 2 },
  { "q": "Probability: If $P(A) = 0.6, P(B) = 0.4$ and $P(A \cap B) = 0.2$, then $P(A' | B')$ is?", o: ["A) $1/3$", "B) $2/3$", "C) $1/2$", "D) $3/4$"], "a": 1 },
  { "q": "Algebra: The value of $\log_3 2 \cdot \log_4 3 \cdot \log_5 4 \cdot \log_6 5$ is?", o: ["A) $\log_6 2$", "B) $\log_2 6$", "C) $1$", "D) $0$"], "a": 0 },
  { "q": "Calculus: Evaluate the definite integral: $\int_{0}^{\pi} \sin^2 x \cos^3 x \, dx$.", o: ["A) $\pi/4$", "B) $0$", "C) $2/15$", "D) $1/5$"], "a": 1 },
  { "q": "Coordinate Geometry: The eccentricity of the conic $4x^2 + 9y^2 = 36$ is?", o: ["A) $\sqrt{5}/3$", "B) $5/9$", "C) $2/3$", "D) $\sqrt{13}/3$"], "a": 0 },
  { "q": "Statistics: If the mean of first $n$ natural numbers is $\frac{n+1}{2}$, what is their variance?", o: ["A) $\frac{n^2-1}{12}$", "B) $\frac{n^2+1}{12}$", "C) $\frac{n^2-1}{6}$", "D) $\frac{n^2+1}{6}$"], "a": 0 },
  { "q": "P&C: How many numbers of 4 digits can be formed with the digits 1, 2, 3, 4, 5 (repetition not allowed) that are divisible by 5?", o: ["A) 120", "B) 24", "C) 60", "D) 12"], "a": 1 }


        ] },

        
        "Set 6": { pass: "1234", msg: motives[5], questions: [
                  // quizData["Set 6"].questions
                
    // --- OS (Operating Systems) ---
  { "q": "Calculus: If $f(x) = \\log_x(\\log e)$, then what is the value of $f'(e)$?", o: ["A) $e^{-1}$", "B) $-e^{-1}$", "C) $1$", "D) $0$"], "a": 1 },
  { "q": "Algebra: If the determinant of a $3 \\times 3$ matrix $A$ is $k$, then what is the value of $|A \\cdot adj(A)|$?", o: ["A) $k^2$", "B) $k^3$", "C) $k^4$", "D) $1$"], "a": 1 },
  { "q": "Coordinate Geometry: The length of the tangent from the point $(5, 1)$ to the circle $x^2 + y^2 + 6x - 4y - 3 = 0$ is?", o: ["A) $7$", "B) $\\sqrt{52}$", "C) $13$", "D) $\\sqrt{10}$"], "a": 1 },
  { "q": "Set Theory: If $A$ and $B$ are two sets such that $n(A) = 17, n(B) = 23$ and $n(A \\cup B) = 38$, find $n(A \\cap B)$.", o: ["A) $2$", "B) $4$", "C) $6$", "D) $0$"], "a": 0 },
  { "q": "Calculus: Evaluate the integral: $\\int_{0}^{1} \\frac{e^{\\tan^{-1} x}}{1+x^2} dx$.", o: ["A) $e^{\\pi/4} - 1$", "B) $e^{\\pi/4}$", "C) $e - 1$", "D) $\\pi/4$"], "a": 0 },
  { "q": "Algebra: If $^nC_{12} = ^nC_8$, then the value of $n$ is?", o: ["A) $20$", "B) $12$", "C) $8$", "D) $30$"], "a": 0 },
  { "q": "Probability: If $P(A) = 0.8, P(B) = 0.5$ and $P(B|A) = 0.4$, find the value of $P(A \\cap B)$.", o: ["A) $0.32$", "B) $0.20$", "C) $0.12$", "D) $0.40$"], "a": 0 },
  { "q": "Coordinate Geometry: The equation of the directrix of the parabola $y^2 = 12x$ is?", o: ["A) $x = 3$", "B) $x = -3$", "C) $y = 3$", "D) $y = -3$"], "a": 1 },
  { "q": "Algebra: Find the common ratio of a G.P. where the first term is $1$ and the sum to infinity is $2$.", o: ["A) $1/2$", "B) $1/4$", "C) $2/3$", "D) $1/3$"], "a": 0 },
  { "q": "Statistics: If each observation of a data is increased by $5$, then how much does the Mean increase?", o: ["A) $0$", "B) $5$", "C) $10$", "D) $2.5$"], "a": 1 },
    // --- DSA (Data Structures & Algorithms) ---
  { "q": "Calculus: The function $f(x) = x^x$ has a stationary point at $x = ?$", o: ["A) $e$", "B) $1/e$", "C) $1$", "D) $\\log e$"], "a": 1 },
  { "q": "Coordinate Geometry: The locus of the mid-point of the chord of the circle $x^2 + y^2 = 4$ which subtends a right angle at the origin is?", o: ["A) $x^2 + y^2 = 1$", "B) $x^2 + y^2 = 2$", "C) $x^2 + y^2 = 4$", "D) $2x^2 + 2y^2 = 1$"], "a": 1 },
  { "q": "Algebra: If $A$ is a square matrix of order $3$ and $|A| = 2$, then find the value of $|adj(adj(A))|$.", o: ["A) $8$", "B) $16$", "C) $64$", "D) $4$"], "a": 1 },
  { "q": "Probability: If $A$ and $B$ are two independent events such that $P(A) = 1/2$ and $P(B) = 1/5$, then $P(A/B)$ is?", o: ["A) $1/2$", "B) $1/5$", "C) $1/10$", "D) $2/5$"], "a": 0 },
  { "q": "Calculus: Evaluate the definite integral: $\\int_{0}^{\\pi/2} \\log(\\tan x) dx$.", o: ["A) $\\pi/2$", "B) $\\pi/4$", "C) $0$", "D) $\\log 2$"], "a": 2 },
  { "q": "Algebra: The value of $x$ satisfying the equation $\\log_{10} (x+1) + \\log_{10} (x-1) = \\log_{10} 3$ is?", o: ["A) $2$", "B) $-2$", "C) $\\pm 2$", "D) $4$"], "a": 0 },
  { "q": "Coordinate Geometry: The eccentricity of the conic $9x^2 + 25y^2 = 225$ is?", o: ["A) $4/5$", "B) $3/5$", "C) $16/25$", "D) $4/3$"], "a": 0 },
  { "q": "Set Theory: If $A = \\{x : x \\text{ is a multiple of } 3\\}$ and $B = \\{x : x \\text{ is a multiple of } 5\\}$, then $A \\cap B$ consists of multiples of?", o: ["A) $3$", "B) $5$", "C) $8$", "D) $15$"], "a": 3 },
  { "q": "Statistics: If the variance of $10$ observations is $16$ and each observation is multiplied by $2$, the new variance will be?", o: ["A) $32$", "B) $64$", "C) $16$", "D) $8$"], "a": 1 },
  { "q": "Algebra: Find the $n^{th}$ term of the progression $1/2, 3/4, 7/8, 15/16, \\dots$.", o: ["A) $1 - 2^{-n}$", "B) $1 + 2^{-n}$", "C) $2^n - 1$", "D) $1 - 2^n$"], "a": 0 }

        ] },

        "Set 7": { pass: "1234", msg: motives[0], questions: [
            // quizData["Set 7"].questions
            //cs QUESTION
    // --- ADVANCED OS (Kernel & Concurrency) ---

  { "q": "Algebra: If $A$ is a square matrix of order $3$ such that $|A| = 4$, then find the value of $|adj(3A)|$.", o: ["A) $432$", "B) $1296$", "C) $5184$", "D) $11664$"], "a": 3 },
  { "q": "Calculus: The equation of the normal to the curve $y = e^{2x}$ at the point where it crosses the y-axis is?", o: ["A) $x + 2y = 2$", "B) $2x + y = 1$", "C) $x - 2y = 2$", "D) $2y + x = 1$"], "a": 0 },
  { "q": "Coordinate Geometry: The area of the triangle formed by the lines $y = x$, $x = 0$ and $y = 6$ is?", o: ["A) $36$", "B) $18$", "C) $9$", "D) $72$"], "a": 1 },
  { "q": "Set Theory: In a group of $500$ people, $300$ can speak Hindi and $250$ can speak English. How many can speak both Hindi and English?", o: ["A) $50$", "B) $75$", "C) $100$", "D) $25$"], "a": 0 },
  { "q": "Probability: A bag contains $4$ red and $6$ black balls. If $2$ balls are drawn at random without replacement, what is the probability that both are red?", o: ["A) $2/15$", "B) $4/25$", "C) $1/15$", "D) $6/45$"], "a": 0 },
  { "q": "Algebra: If $\\log_{10} 2 = 0.3010$ and $\\log_{10} 3 = 0.4771$, find the value of $\\log_{10} (1.5)$.", o: ["A) $0.1761$", "B) $0.7781$", "C) $0.1500$", "D) $0.1249$"], "a": 0 },
  { "q": "Calculus: Evaluate the integral: $\\int_{0}^{1} \\frac{1}{1+x^2} dx$.", o: ["A) $\\pi/2$", "B) $\\pi/4$", "C) $1$", "D) $0$"], "a": 1 },
  { "q": "Coordinate Geometry: The eccentricity of the conic $x^2 - 4y^2 = 16$ is?", o: ["A) $\\sqrt{5}/2$", "B) $5/4$", "C) $\\sqrt{3}/2$", "D) $\\sqrt{5}$"], "a": 0 },
  { "q": "Statistics: If the mean of $5$ observations is $10$ and their variance is $4$, then the sum of squares of the observations is?", o: ["A) $500$", "B) $520$", "C) $480$", "D) $504$"], "a": 1 },
  { "q": "Algebra: If the $n^{th}$ term of a G.P. is $2^{n+1}$, find the sum of first $5$ terms.", o: ["A) $124$", "B) $126$", "C) $120$", "D) $62$"], "a": 1 },
    // --- ADVANCED DSA (Complexities & Trees) ---

  { "q": "Set Theory: If $A$ and $B$ are two sets such that $n(A) = 115, n(B) = 326$ and $n(A-B) = 47$, then find $n(A \\cup B)$.", o: ["A) 373", "B) 394", "C) 441", "D) 211"], "a": 1 },
  { "q": "P&C: Find the number of ways to arrange the letters of the word 'SUCCESS' such that the two 'C's are together but no two 'S's are together.", o: ["A) 120", "B) 96", "C) 24", "D) 48"], "a": 2 },
  { "q": "Probability: If $A$ and $B$ are two events such that $P(A) = 1/4, P(B) = 1/2$ and $P(A \\cap B) = 1/8$, then find $P(\\text{not } A \\text{ and not } B)$.", o: ["A) 3/8", "B) 5/8", "C) 1/4", "D) 1/2"], "a": 0 },
  { "q": "Algebra: If $A$ is a $3 \\times 3$ matrix and $|A| = 5$, then find the value of $|2A \\cdot adj(A)|$.", o: ["A) 40", "B) 200", "C) 100", "D) 50"], "a": 0 },
  { "q": "Algebra: Find the sum of the infinite series $1 + \\frac{2}{3} + \\frac{4}{9} + \\frac{8}{27} + \\dots$.", o: ["A) 2", "B) 3", "C) 1.5", "D) 2.5"], "a": 1 },
  { "q": "Coordinate Geometry: The distance between the foci of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ is?", o: ["A) 8", "B) 6", "C) 10", "D) 12"], "a": 2 },
  { "q": "Calculus: Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\tan x - x}{x^2 \\sin x}$.", o: ["A) $1/2$", "B) $1/3$", "C) $1/6$", "D) $0$"], "a": 1 },
  { "q": "Calculus: Find the area bounded by the curve $y = x^2$ and the line $y = 4$.", o: ["A) $32/3$", "B) $16/3$", "C) $8/3$", "D) $64/3$"], "a": 0 },
  { "q": "Algebra: If $\\log_x (256) = 8/5$, then the value of $x$ is?", o: ["A) 4", "B) 16", "C) 32", "D) 64"], "a": 2 },
  { "q": "Statistics: The mean of $100$ observations is $40$. If one observation $50$ is replaced by $150$, what is the new mean?", o: ["A) 40", "B) 41", "C) 42", "D) 45"], "a": 1 }


    
        ] },
        "Set 8": { pass: "1234", msg: motives[1], questions: [
            // quizData["Set 8"].questions
            //cs QUESTION
  
  { "q": "Calculus: If $f(x) = \\int_{0}^{x} t \\sin t \\, dt$, then $f'(x)$ is?", o: ["A) $x \\cos x$", "B) $x \\sin x$", "C) $x \\sin x + \\cos x$", "D) $\\sin x + x \\cos x$"], "a": 1 },
  { "q": "Algebra: If $A$ is a square matrix of order 3 and $|A| = 2$, then $|2A^{-1}|$ is?", o: ["A) $1$", "B) $2$", "C) $4$", "D) $8$"], "a": 2 },
  { "q": "Coordinate Geometry: The focus of the parabola $y^2 - 4y - 8x + 4 = 0$ is?", o: ["A) $(0, 2)$", "B) $(2, 2)$", "C) $(2, 0)$", "D) $(0, -2)$"], "a": 1 },
  { "q": "Probability: If $P(A) = 0.4$, $P(B) = p$, and $P(A \\cup B) = 0.6$ for independent events $A$ and $B$, then $p = ?$", o: ["A) $1/2$", "B) $1/3$", "C) $1/4$", "D) $1/5$"], "a": 1 },
  { "q": "Calculus: The value of $\\int_{0}^{1} \\frac{dx}{e^x + e^{-x}}$ is?", o: ["A) $\\tan^{-1} e - \\frac{\\pi}{4}$", "B) $\\tan^{-1} e$", "C) $\\frac{\\pi}{4}$", "D) $\\log(e+1)$"], "a": 0 },
  { "q": "Algebra: The number of non-trivial solutions of the system $x - y + z = 0, 2x + y - z = 0, x + 2y - 2z = 0$ is?", o: ["A) $0$", "B) $1$", "C) Infinite", "D) $2$"], "a": 2 },
  { "q": "Set Theory: If $A$ and $B$ are two sets such that $n(A) = 15$, $n(B) = 20$, and $n(A \\cap B) = 10$, then $n(A \\Delta B)$ is?", o: ["A) $5$", "B) $10$", "C) $15$", "D) $25$"], "a": 2 },
  { "q": "Vectors: If $|\vec{a}| = 3, |\vec{b}| = 4$ and $|\vec{a} + \vec{b}| = 5$, then the angle between $\vec{a}$ and $\vec{b}$ is?", o: ["A) $0^\\circ$", "B) $60^\\circ$", "C) $90^\\circ$", "D) $180^\\circ$"], "a": 2 },
  { "q": "Coordinate Geometry: The equation of the line passing through $(1, 2)$ and perpendicular to $3x + 4y + 7 = 0$ is?", o: ["A) $4x - 3y + 2 = 0$", "B) $4x - 3y - 2 = 0$", "C) $3x + 4y - 11 = 0$", "D) $4x + 3y - 10 = 0$"], "a": 0 },
  { "q": "Algebra: Find the value of $\\log_{10} 125 + \\log_{10} 8$.", o: ["A) $1$", "B) $2$", "C) $3$", "D) $1000$"], "a": 2 },
  { "q": "Calculus: The value of the integral $\\int_{-1}^{1} |x| dx$ is?", o: ["A) $0$", "B) $1/2$", "C) $1$", "D) $2$"], "a": 2 },
  { "q": "Algebra: If $A$ is a square matrix of order $3$ such that $A^2 = A$, then the rank of $A$ is equal to?", o: ["A) Trace($A$)", "B) $|A|$", "C) $0$", "D) $n-1$"], "a": 0 },
  { "q": "Coordinate Geometry: The angle between the asymptotes of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is?", o: ["A) $2 \\tan^{-1}(b/a)$", "B) $\\tan^{-1}(b/a)$", "C) $\\pi/2$", "D) $0$"], "a": 0 },
  { "q": "Probability: If $E$ and $F$ are independent events such that $P(E) = 0.3$ and $P(F) = 0.4$, find $P(E|F)$.", o: ["A) $0.12$", "B) $0.3$", "C) $0.4$", "D) $0.7$"], "a": 1 },
  { "q": "Calculus: Find the value of $\\lim_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$.", o: ["A) $0$", "B) $1$", "C) $1/2$", "D) $2$"], "a": 2 },
  { "q": "Set Theory: If $A = \\{x : x^2 = 1\\}$ and $B = \\{x : x^4 = 1\\}$, then $n(A \\Delta B)$ is?", o: ["A) $0$", "B) $2$", "C) $4$", "D) $1$"], "a": 1 },
  { "q": "Algebra: The number of terms in the expansion of $(x + y + z)^{10}$ is?", o: ["A) $11$", "B) $66$", "C) $55$", "D) $21$"], "a": 1 },
  { "q": "Coordinate Geometry: The area of the triangle formed by the lines $y = x$, $x = 6$ and $y = 0$ is?", o: ["A) $36$", "B) $18$", "C) $9$", "D) $12$"], "a": 1 },
  { "q": "Differential Equations: The order and degree of $(\\frac{d^2y}{dx^2})^3 + (\\frac{dy}{dx})^4 + y = 0$ are?", o: ["A) $(2, 3)$", "B) $(3, 2)$", "C) $(2, 4)$", "D) $(4, 2)$"], "a": 0 },
  { "q": "Algebra: If $\\vec{a}$ and $\\vec{b}$ are unit vectors and $\\theta$ is the angle between them, then $|\\vec{a} - \\vec{b}| = 2 \\sin(\\theta/k)$. Find $k$.", o: ["A) $1$", "B) $2$", "C) $3$", "D) $4$"], "a": 1 }


 

        ] },


        "Set 9": { pass: "1234", msg: motives[2], questions: [
            // quizData["Set 9"].questions
    // --- ADVANCED OPERATING SYSTEMS (Concurrency, Paging, Scheduling) ---
  { "q": "Calculus: If $y = \\tan^{-1} \\left( \\frac{\\sqrt{1+x^2}-1}{x} \\right)$, then find the value of $\\frac{dy}{dx}$ at $x = 0$.", o: ["A) $0$", "B) $1$", "C) $1/2$", "D) Not defined"], "a": 2 },
  { "q": "Algebra: If the system of equations $x+y+z=6, x+2y+3z=10, x+2y+\\lambda z = \\mu$ has infinite solutions, then find $(\\lambda, \\mu)$.", o: ["A) $(3, 10)$", "B) $(3, 6)$", "C) $(2, 10)$", "D) $(3, 12)$"], "a": 0 },
  { "q": "Coordinate Geometry: The locus of the mid-point of the portion of the line $x \\cos \\alpha + y \\sin \\alpha = p$ intercepted between the axes is?", o: ["A) $x^2+y^2=4p^2$", "B) $\\frac{1}{x^2}+\\frac{1}{y^2}=\\frac{4}{p^2}$", "C) $x^2+y^2=p^2$", "D) $\\frac{1}{x^2}+\\frac{1}{y^2}=\\frac{1}{p^2}$"], "a": 1 },
  { "q": "Integration: Evaluate the definite integral: $\\int_{0}^{\\pi/4} \\log(1 + \\tan x) dx$.", o: ["A) $\\frac{\\pi}{4} \\log 2$", "B) $\\frac{\\pi}{8} \\log 2$", "C) $\\frac{\\pi}{2} \\log 2$", "D) $\\log 2$"], "a": 1 },
  { "q": "Algebra (Matrices): If $A$ is a $3 \\times 3$ matrix and $|3A| = k|A|$, then the value of $k$ is?", o: ["A) $3$", "B) $9$", "C) $27$", "D) $1$"], "a": 2 },
  { "q": "Probability: If $A$ and $B$ are events such that $P(A) = 1/2, P(B) = 1/3$ and $P(A \\cap B) = 1/4$, then find $P(A' \\cap B')$.", o: ["A) $1/12$", "B) $5/12$", "C) $7/12$", "D) $3/4$"], "a": 1 },
  { "q": "Calculus: The point on the curve $y^2 = x$ where the tangent makes an angle of $45^\\circ$ with the x-axis is?", o: ["A) $(1/4, 1/2)$", "B) $(1/2, 1/4)$", "C) $(1, 1)$", "D) $(4, 2)$"], "a": 0 },
  { "q": "Coordinate Geometry: Find the equation of the directrix of the parabola $x^2 = -8y$.", o: ["A) $y = 2$", "B) $y = -2$", "C) $x = 2$", "D) $x = -2$"], "a": 0 },
  { "q": "Algebra (Logarithm): If $2 \\log x = \\log 2 + \\log(x+4)$, then find the value of $x$.", o: ["A) $4$", "B) $-2$", "C) $2$", "D) Both 4 and -2"], "a": 0 },
  { "q": "Statistics: If the mean of $n$ observations is $\\bar{x}$, what is the new mean if each observation is multiplied by $k$ and then increased by $a$?", o: ["A) $\\bar{x}+a$", "B) $k\\bar{x}$", "C) $k\\bar{x}+a$", "D) $k(\\bar{x}+a)$"], "a": 2 },
  
  { "q": "Calculus: Evaluate the limit: $\\lim_{x \\to 0} \\frac{\\tan x - \\sin x}{x^3}$.", o: ["A) $1$", "B) $1/2$", "C) $1/3$", "D) $0$"], "a": 1 },
  { "q": "Algebra: If $A$ is a square matrix such that $A^2 = I$, then what is the value of $(A - I)^3 + (A + I)^3 - 7A$?", o: ["A) $A$", "B) $I$", "C) $3A$", "D) $0$"], "a": 0 },
  { "q": "Coordinate Geometry: The distance between the foci of the ellipse $9x^2 + 5y^2 = 45$ is?", o: ["A) $4$", "B) $3$", "C) $2$", "D) $\\sqrt{5}$"], "a": 0 },
  { "q": "Integration: Find the value of $\\int_{0}^{1} x(1-x)^{99} dx$.", o: ["A) $1/10100$", "B) $1/10000$", "C) $1/9900$", "D) $1/101$"], "a": 0 },
  { "q": "Probability: If $A$ and $B$ are two independent events with $P(A) = 1/3$ and $P(B) = 1/4$, then $P(A \\cup B)$ is?", o: ["A) $1/2$", "B) $7/12$", "C) $5/12$", "D) $1/6$"], "a": 0 },
  { "q": "Algebra: Find the value of $\\log_2 10 - \\log_2 5$.", o: ["A) $\\log_2 5$", "B) $1$", "C) $0.5$", "D) $2$"], "a": 1 },
  { "q": "Calculus: The maximum value of $f(x) = x + \\frac{1}{x}$ for $x > 0$ occurs at $x = ?$", o: ["A) $1$", "B) $2$", "C) $0.5$", "D) None (it has a minimum)"], "a": 3 },
  { "q": "Coordinate Geometry: The length of the latus rectum of the parabola $y^2 = -16x$ is?", o: ["A) $4$", "B) $8$", "C) $16$", "D) $32$"], "a": 2 },
  { "q": "Set Theory: If $A = \\{1, 2, 3\\}$, how many proper subsets does it have?", o: ["A) $8$", "B) $7$", "C) $6$", "D) $5$"], "a": 2 },
  { "q": "Algebra: If $\\alpha$ and $\\beta$ are roots of $x^2 - 5x + 6 = 0$, find $\\alpha^2 + \\beta^2$.", o: ["A) $13$", "B) $25$", "C) $12$", "D) $10$"], "a": 0 }

  
    // --- ADVANCED DATA STRUCTURES & ALGORITHMS (Complexity, Trees, Graphs) ---
    

        ] },
        "Set 10": { pass: "1234", msg: motives[3], questions: [
            // quizData["Set 10"].questions
    // --- Set 10: Operating Systems (Advanced/Mixed) ---

  { "q": "Algebra: If $A$ is a square matrix of order $3$ and $|A| = 4$, then what is the value of $|adj(adj(A))|$?", o: ["A) $256$", "B) $64$", "C) $1024$", "D) $16$"], "a": 0 },
  { "q": "Calculus: Evaluate the limit: $\\lim_{x \\to 0} \\frac{1 - \\cos 4x}{x^2}$.", o: ["A) $4$", "B) $8$", "C) $16$", "D) $2$"], "a": 1 },
  { "q": "Probability: If $P(A) = 0.4, P(B) = 0.8$ and $P(B|A) = 0.6$, find the value of $P(A \\cup B)$.", o: ["A) $0.96$", "B) $0.84$", "C) $0.56$", "D) $0.72$"], "a": 0 },
  { "q": "Algebra: If $\\log_{10} 2, \\log_{10} (2^x - 1)$ and $\\log_{10} (2^x + 3)$ are in A.P., then find the value of $x$.", o: ["A) $\\log_2 5$", "B) $\\log_5 2$", "C) $2$", "D) $3/2$"], "a": 0 },
  { "q": "Coordinate Geometry: The eccentricity $e$ of the hyperbola $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ is?", o: ["A) $5/4$", "B) $4/3$", "C) $5/3$", "D) $\\sqrt{7}/4$"], "a": 0 },
  { "q": "Calculus: Find the value of the integral $\\int_{0}^{\\pi} \\frac{x \\sin x}{1 + \\cos^2 x} dx$.", o: ["A) $\\pi^2/4$", "B) $\\pi^2/2$", "C) $\\pi/4$", "D) $\\pi/2$"], "a": 0 },
  { "q": "Set Theory: In a class of $100$ students, $60$ like Math, $40$ like Science and $20$ like both. How many like neither?", o: ["A) $0$", "B) $20$", "C) $30$", "D) $10$"], "a": 1 },
  { "q": "Coordinate Geometry: The area bounded by the curve $y^2 = 4ax$ and the line $x = a$ is?", o: ["A) $\\frac{8}{3}a^2$", "B) $\\frac{4}{3}a^2$", "C) $2a^2$", "D) $\\frac{16}{3}a^2$"], "a": 0 },
  { "q": "Algebra: If the sum of first $n$ terms of two A.P.s are in the ratio $(7n+1) : (4n+27)$, find the ratio of their $11^{th}$ terms.", o: ["A) $2:3$", "B) $7:4$", "C) $4:3$", "D) $5:6$"], "a": 2 },
  { "q": "Calculus: Find the slope of the normal to the curve $y = x^2 + 2x + 1$ at the point $(1, 4)$.", o: ["A) $4$", "B) $-1/4$", "C) $1/4$", "D) $-4$"], "a": 1 },
  
    // --- Set 10: DSA (Advanced/Mixed) ---
  { "q": "Algebra: If $A$ is a square matrix of order $n$ and $|A| = k$, then what is the value of $|adj(adj(A))|$?", o: ["A) $k^{(n-1)}$", "B) $k^{(n-1)^2}$", "C) $k^{n^2}$", "D) $k^{2(n-1)}$"], "a": 1 },
  { "q": "Calculus: Evaluate the limit: $\\lim_{x \\to 0} \\frac{e^{x^2} - \\cos x}{x^2}$.", o: ["A) $1/2$", "B) $3/2$", "C) $1$", "D) $2$"], "a": 1 },
  { "q": "Coordinate Geometry: The eccentricity $e$ of the hyperbola $16x^2 - 9y^2 = 144$ is?", o: ["A) $5/4$", "B) $4/3$", "C) $5/3$", "D) $\\sqrt{7}/3$"], "a": 2 },
  { "q": "Calculus: Find the value of $\\int_{0}^{\\pi/2} \\frac{\\sin^n x}{\\sin^n x + \\cos^n x} dx$.", o: ["A) $\\pi$", "B) $\\pi/2$", "C) $\\pi/4$", "D) $0$"], "a": 2 },
  { "q": "Set Theory: If $A$ and $B$ are two sets such that $n(A) = 0.16, n(B) = 0.14$ and $n(A \\cup B) = 0.25$, find $n(A \\cap B)$.", o: ["A) $0.05$", "B) $0.15$", "C) $0.10$", "D) $0.03$"], "a": 0 },
  { "q": "Algebra: If the sum of the first $n$ terms of an A.P. is $S_n = 3n^2 + 5n$, then its $m^{th}$ term is $164$. Find $m$.", o: ["A) $26$", "B) $27$", "C) $28$", "D) $25$"], "a": 1 },
  { "q": "Probability: A box contains $100$ tickets numbered $1$ to $100$. If a ticket is drawn at random, what is the probability that the number is a multiple of $3$ or $7$?", o: ["A) $43/100$", "B) $47/100$", "C) $41/100$", "D) $33/100$"], "a": 0 },
  { "q": "Calculus: Find the derivative of $y = x^x$ at $x = e$.", o: ["A) $e^e$", "B) $2e^e$", "C) $e^e(1 + \\log e)$", "D) $2e$"], "a": 1 },
  { "q": "Algebra: The value of $\\log_2 (\\log_3 81)$ is?", o: ["A) $1$", "B) $2$", "C) $3$", "D) $4$"], "a": 1 },
  { "q": "Coordinate Geometry: The area bounded by the parabola $y^2 = 4ax$ and its latus rectum is?", o: ["A) $\\frac{2}{3}a^2$", "B) $\\frac{4}{3}a^2$", "C) $\\frac{8}{3}a^2$", "D) $\\frac{16}{3}a^2$"], "a": 2 }


        ] }
    };

    let activeSet = null, curr = 0, userAns = [], qStatus = [], timeLeft = 1200;

    function initHome() {
        const grid = document.getElementById("test-grid");
        document.getElementById("home-quote").innerText = `"${motives[Math.floor(Math.random() * motives.length)]}"`;
        Object.keys(quizData).forEach(name => {
            grid.innerHTML += `<div class="p-card"><h3>${name}</h3><p class="desc">MCA Mock Test Series.</p><button class="action-btn" onclick="openGate('${name}')">Start Test</button></div>`;
        });
    }

    function openGate(name) { activeSet = name; document.getElementById("home-screen").style.display = "none"; document.getElementById("lock-screen").style.display = "block"; }
    function checkAccess() {
        if(document.getElementById("pass-code").value === quizData[activeSet].pass) {
            document.getElementById("lock-screen").style.display = "none"; document.getElementById("exam-screen").style.display = "flex";
            const qCount = quizData[activeSet].questions.length || 75;
            userAns = new Array(qCount).fill(null); qStatus = new Array(qCount).fill('not-visited');
            loadStep(0); setInterval(runClock, 1000);
        } else { alert("Access Denied!"); }
    }

    function loadStep(i) {
        curr = i; const data = quizData[activeSet].questions[i] || { q: "Questions loading in Step 7...", o: ["A","B","C","D"], a: 0 };
        document.getElementById("q-label").innerText = `Question ${i+1}`; 
        document.getElementById("q-text").innerHTML = data.q;
        const opts = document.getElementById("opt-container"); opts.innerHTML = "";
        data.o.forEach((txt, idx) => { const cls = (userAns[curr] === idx) ? 'selected' : ''; opts.innerHTML += `<button class="opt-btn ${cls}" onclick="pick(${idx})">${txt}</button>`; });
        renderMathInElement(document.body, { delimiters: [{left: "$", right: "$", display: false}] });
        refreshPalette();
    }

    function refreshPalette() {
        const grid = document.getElementById("palette-grid"), count = quizData[activeSet].questions.length || 75; grid.innerHTML = "";
        for(let i=0; i<count; i++) grid.innerHTML += `<div class="q-box ${qStatus[i]} ${i===curr?'active':''}" onclick="loadStep(${i})">${i+1}</div>`;
    }

    function pick(idx) { userAns[curr] = idx; loadStep(curr); }
    function clearStep() { userAns[curr] = null; qStatus[curr] = 'not-visited'; loadStep(curr); }
    function prevStep() { if(curr > 0) loadStep(curr-1); }
    function nextStep() { if(curr < userAns.length-1) loadStep(curr+1); }
    function markStep() { qStatus[curr] = 'review'; autoMove(); }
    function saveStep() { qStatus[curr] = (userAns[curr] !== null) ? 'answered' : 'not-visited'; autoMove(); }
    function autoMove() { if(curr < userAns.length-1) loadStep(curr+1); else refreshPalette(); }
    function runClock() { timeLeft--; let m = Math.floor(timeLeft/60), s = timeLeft%60; document.getElementById("cbt-timer").innerText = `TIME: ${m}:${s<10?'0'+s:s}`; if(timeLeft <= 0) finalize(); }
    function confirmSubmit() { if(confirm("Submit?")) finalize(); }

    function finalize() {
    document.getElementById("exam-screen").style.display = "none"; 
    document.getElementById("result-screen").style.display = "flex";
    
    let total = 0, correct = 0, wrong = 0, skipped = 0, cs = 0, math = 0, reason = 0;
    
    userAns.forEach((ans, i) => {
        const actual = quizData[activeSet].questions[i]?.a;
        
        if (ans === null) {
            skipped++;
        } else if (ans === actual) { 
            correct++; 
            total += 4; 
            if (i < 40) cs += 4; 
            else if (i < 63) math += 4; 
            else reason += 4; 
        } else { 
            wrong++; 
            total -= 1; 
            if (i < 40) cs -= 1; 
            else if (i < 63) math -= 1; 
            else reason -= 1; 
        }
    });

    // Score aur Numbers Update
    document.getElementById("final-total").innerText = total;
    document.getElementById("res-correct").innerText = correct;
    document.getElementById("res-wrong").innerText = wrong;
    document.getElementById("res-skipped").innerText = skipped;

    // Subject Breakdown Update
    document.getElementById("score-cs").innerText = cs;
    document.getElementById("score-math").innerText = math;
    document.getElementById("score-reason").innerText = reason;
    
    document.getElementById("result-motive").innerText = quizData[activeSet].msg;
}

    initHome();