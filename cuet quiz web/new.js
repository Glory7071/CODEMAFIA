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
  { q: "Which of the following scheduling algorithms can lead to starvation?", o: ["FCFS", "Round Robin", "Shortest Job First", "None"], a: 2 },
  { q: "What is the time complexity of searching an element in a Hash Table (Average Case)?", o: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], a: 0 },
  { q: "A process that has finished execution but still has an entry in the process table is called?", o: ["Orphan Process", "Zombie Process", "Parent Process", "Daemon Process"], a: 1 },
  { q: "Which logic gate is equivalent to (A+B)'?", o: ["NAND", "NOR", "XOR", "XNOR"], a: 1 },
  { q: "Which data structure is used to implement recursion?", o: ["Queue", "Stack", "Linked List", "Tree"], a: 1 },
  { q: "In Digital Logic, 16-to-1 Multiplexer has how many select lines?", o: ["2", "3", "4", "5"], a: 2 },
  { q: "Banker's Algorithm is used for?", o: ["Deadlock Prevention", "Deadlock Avoidance", "Deadlock Detection", "Resource Allocation"], a: 1 },
  { q: "What is the result of 2's complement of 1100?", o: ["0100", "0011", "0010", "1111"], a: 0 },
  { q: "Which sorting algorithm has the best worst-case time complexity?", o: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], a: 2 },
  { q: "In OS, 'Paging' is used to solve which problem?", o: ["Internal Fragmentation", "External Fragmentation", "Thrashing", "Starvation"], a: 1 },
    // --- Set 7: Operating Systems (Linux/Unix Internals & Advanced Concepts) ---
    { q: "Which Linux/Unix command is used to display the currently running processes?", o: ["ls", "grep", "ps", "kill"], a: 2 },
    { q: "In the Unix/Linux file system structure, what does an 'inode' contain?", o: ["Actual file data", "File name and path", "Metadata like permissions, ownership, and block pointers", "User password"], a: 2 },
    { q: "The 'fork()' system call creates a new process that is an exact copy of the parent process, except for which unique identifier?", o: ["File pointers", "Process ID (PID)", "Memory layout", "User ID (UID)"], a: 1 },
    { q: "What is 'Aging' a technique used to prevent in Priority Scheduling algorithms?", o: ["Deadlock", "Starvation", "Context switching overhead", "Convoy effect"], a: 1 },
    { q: "Which memory allocation technique suffers from 'External Fragmentation'?", o: ["Paging", "Segmentation", "Fixed Partitioning", "Virtual Memory"], a: 1 },
    { q: "Which protection ring in a CPU (e.g., x86 architecture) is reserved for the Operating System Kernel with full privileges?", o: ["Ring 3 (User Space)", "Ring 2", "Ring 1", "Ring 0 (Kernel Space)"], a: 3 },
    { q: "Which algorithm is used by Linux for scheduling interactive processes, providing dynamic priorities?", o: ["FCFS", "CFS (Completely Fair Scheduler)", "Round Robin", "SJF"], a: 1 },
    { q: "What is the result of using a 'Monitor' for synchronization?", o: ["Guarantees no deadlocks", "Ensures only one process is active within the critical section code at any time", "Increases thrashing", "Eliminates starvation"], a: 1 },
    { q: "In virtual memory systems, a 'Page Fault Rate' is used to control which condition?", o: ["CPU utilization", "Throughput", "Thrashing", "Disk access time"], a: 2 },
    { q: "Which layer of the OS kernel directly interacts with the hardware devices?", o: ["Application Layer", "System Call Interface", "Hardware Abstraction Layer (HAL) / Device Drivers", "Shell"], a: 2 },

    // --- Set 7: Data Structures & Algorithms (Advanced Concepts & Analysis) ---
    { q: "The time complexity of finding the k-th smallest element in an array using an optimal selection algorithm is?", o: ["O(n log k)", "O(n log n)", "O(n)", "O(k log n)"], a: 2 },
    { q: "Which data structure is best suited for implementing a 'symbol table' in a compiler for fast lookups?", o: ["Array", "Linked List", "Binary Search Tree", "Hash Table"], a: 3 },
    { q: "What is the time complexity of building a Max-Heap from an unsorted array of N elements?", o: ["O(N log N)", "O(N)", "O(log N)", "O(1)"], a: 1 },
    { q: "The number of nodes visited during a worst-case search in a Red-Black Tree is bounded by a logarithmic function of N, specifically about 2 * log2(N+1). This ensures the tree remains always?", o: ["Full", "Complete", "Perfectly Balanced", "Height Balanced"], a: 3 },
    { q: "Which algorithm uses a stack data structure implicitly during its execution?", o: ["BFS", "Prim's Algorithm", "Dijkstra's", "DFS"], a: 3 },
    { q: "Which algorithm solves the 'Fractional Knapsack Problem' using a greedy approach?", o: ["Dynamic Programming", "Dijkstra", "Kruskal", "Greedy Choice Property"], a: 3 },
    { q: "What is the average time complexity of deleting an arbitrary node from a linked list *if* you are only given a pointer to that specific node?", o: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], a: 2 },
    { q: "Which type of B-Tree stores data pointers only at the leaf nodes?", o: ["B-Tree", "B+ Tree", "Binary Tree", "AVL Tree"], "a": 1 },
    { q: "The number of edges in a tree with N vertices is exactly?", o: ["N", "N+1", "N-1", "2N"], a: 2 },
    { q: "The 'Pumping Lemma' is a crucial theorem used to prove what property of a language?", o: ["If it is Context Free", "If it is Decidable", "If it is Regular", "If it is NP-Hard"], a: 2 },

    // --- Set 7: Digital Logic & Architecture (Microprocessors & ICs) ---
    { q: "In a microprocessor, the 'Program Counter' holds which crucial piece of information?", o: ["The result of the previous calculation", "The data currently being processed", "The address of the next instruction to be fetched", "The total number of instructions executed"], a: 2 },
    { q: "Which pin of the 8085 Microprocessor is the highest priority non-maskable interrupt?", o: ["INTR", "RST 7.5", "TRAP", "RST 5.5"], a: 2 },
    { q: "A 'Decoder' with N inputs has how many possible unique active outputs?", o: ["N", "2N", "N^2", "2^N"], a: 3 },
    { q: "The input to a 'Shift Register' is often serial, but the output can be either serial or parallel. What application uses PIPO (Parallel In Parallel Out)?", o: ["Serial communication", "Frequency division", "Temporary data storage for bus width matching", "Analog to Digital Conversion"], a: 2 },
    { q: "A Flash ADC is favored for its high speed. How many comparators does an N-bit Flash ADC require?", o: ["N", "2^N", "2^N - 1", "N^2"], a: 2 },
    { q: "The phenomenon where the output of a logic circuit changes momentarily due to propagation delays before settling to the correct value is called?", o: ["Race around condition", "Setup time violation", "Glitches / Hazards", "Metastability"], a: 2 },
    { q: "Which IC (Integrated Circuit) is known as a Quad 2-input XOR Gate?", o: ["7408", "7432", "7486", "7400"], a: 2 },
    { q: "The concept of 'Pipelining' in CPU design exploits which type of parallelism?", o: ["Data Parallelism", "Task Parallelism (Instruction Level Parallelism)", "Bit-level Parallelism", "Memory Parallelism"], a: 1 },
    { q: "Which type of logic family is highly susceptible to damage from static electricity discharge (ESD)?", o: ["TTL", "ECL", "RTL", "CMOS"], a: 3 },
    { q: "What is the output Q of a JK Flip-Flop if J=1, K=1, and the clock pulse arrives (assuming it toggles on the edge)?", o: ["0", "1", "No Change", "Complement of previous state"], a: 3 },

  { q: "Evaluate: $\\int_0^1 x^2 dx$.", o: ["$1/2$", "$1/3$", "$1$", "$2/3$"], a: 1 },
            { q: "Limit of $\\frac{\\sin x}{x}$ as $x \\to 0$.", o: ["$0$", "$1$", "$\\infty$", "$-1$"], a: 1 },
            { q: "If $A = [1, 2; 3, 4]$, find $|A|$.", o: ["$2$", "$-2$", "$10$", "$0$"], a: 1 },
            { q: "Derivative of $e^{3x}$.", o: ["$e^{3x}$", "$3e^{3x}$", "$\\frac{1}{3}e^{3x}$", "$3x e^{3x}$"], a: 1 },
            { q: "Value of $i^2$.", o: ["$1$", "$-1$", "$i$", "$-i$"], a: 1 },
            { q: "Sum of roots of $x^2 - 5x + 6 = 0$.", o: ["$5$", "$-5$", "$6$", "$1$"], a: 0 },
            { q: "Next term in 2, 4, 8, 16...", o: ["24", "30", "32", "64"], a: 2 },
            { q: "Distance between (0,0) and (3,4).", o: ["5", "7", "1", "25"], a: 0 },
            { q: "Area of circle with radius $r$.", o: ["$2\\pi r$", "$\\pi r^2$", "$2\\pi r^2$", "$\\pi d$"], a: 1 },
            { q: "Integral of $1/x$.", o: ["$e^x$", "$\\log x$", "$x$", "$x^2/2$"], a: 1 },
            { q: "Value of $\\cos 0^\\circ$.", o: ["0", "1", "-1", "1/2"], a: 1 },
            { q: "$\\{1, 2\\} \\cup \\{2, 3\\}$.", o: ["$\\{1, 2, 3\\}$", "$\\{2\\}$", "$\\{1, 3\\}$", "$\\{1, 2\\}$"], a: 0 },
            { q: "Solve for $x$: $2x + 4 = 10$.", o: ["2", "3", "4", "6"], a: 1 },
            { q: "Dot product of $\\vec{i} \\cdot \\vec{i}$.", o: ["0", "1", "k", "-1"], a: 1 },
            { q: "Slope of line $y = 3x + 2$.", o: ["2", "3", "-3", "1/3"], a: 1 },
            { q: "Prob. of Head in one coin toss.", o: ["0", "1", "1/2", "1/4"], a: 2 },
            { q: "Median of 1, 2, 3, 4, 5.", o: ["2", "3", "4", "5"], a: 1 },
            { q: "Value of $5!$.", o: ["20", "60", "120", "240"], a: 2 },
            { q: "Is $y=x^3$ odd?", o: ["Yes", "No", "Depends", "None"], a: 0 },
            { q: "$\\% 50$ of 200.", o: ["50", "100", "150", "20"], a: 1 },
            { q: "$\\sin^2 x + \\cos^2 x = ?$", o: ["0", "1", "-1", "2"], a: 1 },
            { q: "Matrix $I$ is called?", o: ["Zero", "Identity", "Null", "Singular"], a: 1 },
            { q: "Log of 1 to any base.", o: ["1", "0", "Base", "Infinite"], a: 1 },
            // REASONING (64-75)
            { q: "If A is the brother of B; B is the sister of C; and C is the father of D, how is A related to D?", o: ["Father", "Uncle", "Brother", "Grandfather"], a: 1 },
            { q: "Find the next number in the series: 2, 6, 12, 20, 30, ?", o: ["36", "40", "42", "45"], a: 2 },
            { q: "In a certain code, 'APPLE' is written as 'BQQMF'. How is 'GRAPE' written?", o: ["HSBQF", "HSBPE", "HTBQF", "HQZOD"], a: 0 },
            { q: "All dogs are animals. All animals have four legs. Conclusion: All dogs have four legs.", o: ["True", "False", "Invalid", "Maybe"], a: 0 }
        ] },
      
        "Set 2": { pass: "1234", msg: motives[1], questions: [

         // COMPUTER SCIENCE (1-40)
            { q: "Which of the following is known as a Universal Gate?", o: ["A) AND gate", "B) OR gate", "C) NAND gate", "D) NOT gate"], a: 2 },
            { q: "What is the time complexity of searching an element in a Hash Table (Average Case)?", o: ["O(1)", "O(log n)", "O(n)", "O(n^2)"], a: 0 },
            { q: "A process that has finished execution but still has an entry in the process table is called?", o: ["Orphan Process", "Zombie Process", "Parent Process", "Daemon Process"], a: 1 },
            { q: "Which logic gate is equivalent to (A+B)'?", o: ["NAND", "NOR", "XOR", "XNOR"], a: 1 },
            { q: "Which data structure is used to implement recursion?", o: ["Queue", "Stack", "Linked List", "Tree"], a: 1 },
            { q: "In Digital Logic, 16-to-1 Multiplexer has how many select lines?", o: ["2", "3", "4", "5"], a: 2 },
            { q: "Banker's Algorithm is used for?", o: ["Deadlock Prevention", "Deadlock Avoidance", "Deadlock Detection", "Resource Allocation"], a: 1 },
            { q: "What is the result of 2's complement of 1100?", o: ["0100", "0011", "0010", "1111"], a: 0 },
            { q: "Which sorting algorithm has the best worst-case time complexity?", o: ["Bubble Sort", "Insertion Sort", "Merge Sort", "Selection Sort"], a: 2 },
            { q: "In OS, 'Paging' is used to solve which problem?", o: ["Internal Fragmentation", "External Fragmentation", "Thrashing", "Starvation"], a: 1 },
        
    // --- Set 6: Operating Systems (Advanced I/O & Memory) ---
    { q: "In which file allocation method is contiguous disk space allocated to a file at the time of creation?", o: ["Linked Allocation", "Indexed Allocation", "Contiguous Allocation", "FAT Allocation"], a: 2 },
    { q: "The 'Locality of Reference' principle justifies the use of which component in a computer system?", o: ["Interrupts", "Main Memory", "Cache Memory", "Virtual Memory"], a: 2 },
    { q: "Which data structure is typically used to implement the 'Ready Queue' in most general-purpose operating systems?", o: ["Stack", "Hash Table", "Linked List", "Array"], a: 2 },
    { q: "A TLB (Translation Lookaside Buffer) is a specialized, high-speed cache for storing which type of mappings?", o: ["File names to physical addresses", "Logical addresses to physical addresses", "Process IDs to memory regions", "Virtual addresses to page numbers"], a: 3 },
    { q: "Which disk scheduling algorithm requires an initial sweep direction (up or down)?", o: ["FCFS", "SSTF", "SCAN (Elevator)", "LOOK"], a: 2 },
    { q: "The primary goal of 'RAID 5' configuration is to provide a balance between performance, capacity, and which other factor?", o: ["Security", "Cost", "Redundancy (Fault Tolerance)", "Speed of read operations"], "a": 2 },
    { q: "Which component of a modern OS handles process creation, deletion, and context switching?", o: ["File Manager", "Device Manager", "Memory Manager", "Process Manager"], a: 3 },
    { q: "In a 3-level paging scheme, the number of memory accesses required to fetch a data word is typically (assuming no TLB hit):", o: ["One", "Two", "Three", "Four"], a: 3 },
    { q: "Which OS design approach uses message passing for all inter-process communication?", o: ["Monolithic Kernel", "Layered OS", "Microkernel", "Exokernel"], a: 2 },
    { q: "What mechanism is used by Unix/Linux for sharing memory between two distinct processes?", o: ["Pipes", "Sockets", "Shared Memory Segments", "Message Queues"], a: 2 },

    // --- Set 6: Data Structures & Algorithms (Advanced Topics) ---
    { q: "The number of inversions in an already sorted array in ascending order is?", o: ["O(n log n)", "O(n)", "O(n^2)", "0"], a: 3 },
    { q: "In a Hash Table with open addressing (linear probing), which concept describes the formation of clusters of occupied cells?", o: ["Secondary Clustering", "Primary Clustering", "Overflow", "Collision"], a: 1 },
    { q: "Which graph algorithm is best suited for finding the shortest path from a single source to all other vertices with non-negative edge weights?", o: ["Bellman-Ford", "Floyd Warshall", "Dijkstra's Algorithm", "BFS"], a: 2 },
    { q: "The worst-case space complexity of Quick Sort (using recursive calls stack) is?", o: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], a: 2 },
    { q: "What is the expected average time complexity of all operations (insertion, deletion, search) in a Red-Black Tree?", o: ["O(n)", "O(n log n)", "O(log n)", "O(1)"], a: 2 },
    { q: "Which data structure performs operations based purely on LIFO principles, often implemented recursively?", o: ["Queue", "Priority Queue", "Heap", "Stack"], a: 3 },
    { q: "Which sorting algorithm is a comparison-based algorithm that achieves O(n log n) but is NOT in-place?", o: ["Quick Sort", "Insertion Sort", "Heap Sort", "Merge Sort"], a: 3 },
    { q: "What property must a B-tree satisfy at all times regarding its nodes?", o: ["All leaves must be at the same level", "It must be a binary tree", "It must be balanced by height factors of -1, 0, or 1", "Nodes can only have 2 children"], a: 0 },
    { q: "The process of converting a general tree into a set of binary trees is often done using which representation?", o: ["Adjacency Matrix", "Adjacency List", "Left Child Right Sibling (LCRS)", "In-order traversal"], a: 2 },
    { q: "Which type of data structure is used to implement a Least Recently Used (LRU) cache efficiently?", o: ["Queue & Hash Map", "Stack & Array", "Doubly Linked List & Hash Map", "Singly Linked List & Array"], a: 2 },

    // --- Set 6: Digital Logic & Architecture (Advanced) ---
    { q: "A 4-stage instruction pipeline improves performance by overlapping execution but introduces which major problem?", o: ["Power consumption issues", "Cache coherency issues", "Hazards (Data, Control, Structural)", "Memory leaks"], a: 2 },
    { q: "Which component of the CPU is responsible for generating the timing and control signals for all operations?", o: ["ALU", "Registers", "Control Unit (CU)", "Memory Management Unit (MMU)"], a: 2 },
    { q: "A 'Don't Care' condition in a K-Map can be treated as a 0 or 1, primarily to facilitate what action?", o: ["Error detection", "Maximal grouping for simplification", "Determining output level", "Minimizing power"], a: 1 },
    { q: "How many 2x1 Multiplexers are required to implement a 16x1 Multiplexer?", o: ["8", "12", "15", "16"], a: 2 },
    { q: "The resolution of an N-bit DAC is given by which formula?", o: ["1 / (2N - 1)", "1 / (2^N - 1)", "1 / N", "Vref / 2^N"], a: 1 },
    { q: "Which of these memories is volatile and requires refreshing circuitry?", o: ["SRAM", "ROM", "DRAM", "Flash Memory"], a: 2 },
    { q: "The number of states in a Mod-12 counter implemented using 4 FFs will skip how many invalid states?", o: ["0", "4", "6", "8"], a: 1 },
    { q: "Which logic family uses a 'Totem-pole' output stage to provide low output impedance in both high and low states?", o: ["CMOS", "ECL", "TTL", "RTL"], a: 2 },
    { q: "The primary advantage of using a 'Look-Ahead Carry Adder' over a 'Ripple Carry Adder' is?", o: ["Lower cost", "Reduced propagation delay (higher speed)", "Lower power consumption", "Simpler design"], a: 1 },
    { q: "Which addressing mode uses the value in the register as the actual memory address of the operand?", o: ["Immediate", "Direct", "Register Indirect", "Indexed"], a: 2 },

            { q: "Value of $\\int \\sin x dx$.", o: ["$\\cos x$", "$-\\cos x$", "$\\sin x$", "$\\tan x$"], a: 1 },
            { q: "Derivative of $\\tan x$.", o: ["$\\sec^2 x$", "$\\sec x$", "$\\cot x$", "$\\cos^2 x$"], a: 0 },
            { q: "$\\{x \\mid x^2=4\\}$ in Roaster form.", o: ["$\\{2\\}$", "$\\{4\\}$", "$\\{-2, 2\\}$", "$\\{0, 2\\}$"], a: 2 },
            { q: "If $|A|=0$, A is?", o: ["Invertible", "Singular", "Orthogonal", "Identity"], a: 1 },
            { q: "Limit of $x^2$ as $x \\to 2$.", o: ["0", "2", "4", "8"], a: 2 },
            { q: "Vector $\\vec{a} \\times \\vec{a} = ?$", o: ["$a^2$", "$\\vec{0}$", "$1$", "$-1$"], a: 1 },
            { q: "Equation of Circle at origin, radius 5.", o: ["$x+y=5$", "$x^2+y^2=5$", "$x^2+y^2=25$", "$xy=25$"], a: 2 },
            { q: "Probability of Sure event.", o: ["0", "1", "0.5", "Infinite"], a: 1 },
            { q: "Log of 100 to base 10.", o: ["1", "2", "10", "100"], a: 1 },
            { q: "Discriminant of $x^2 + x + 1 = 0$.", o: ["0", "1", "-3", "4"], a: 2 },
            { q: "Arithmetic Mean of 10, 20, 30.", o: ["10", "15", "20", "25"], a: 2 },
            { q: "Slope of perpendicular line to $m=2$.", o: ["2", "-2", "1/2", "-1/2"], a: 3 },
            { q: "$\int_1^2 2x dx$.", o: ["1", "2", "3", "4"], a: 2 },
            { q: "Is $\sin x$ periodic?", o: ["Yes", "No", "Sometimes", "Only at 0"], a: 0 },
            { q: "Determinant of $2 \\times 2$ Identity.", o: ["0", "1", "2", "-1"], a: 1 },
            { q: "Number of subsets of $\\{1, 2, 3\\}$.", o: ["3", "6", "8", "9"], a: 2 },
            { q: "Derivative of $\log x$.", o: ["$x$", "$1/x$", "$e^x$", "$0$"], a: 1 },
            { q: "Focus of $y^2 = 4ax$.", o: ["(a,0)", "(0,a)", "(-a,0)", "(0,0)"], a: 0 },
            { q: "Value of $P(A) + P(A')$.", o: ["0", "0.5", "1", "2"], a: 2 },
            { q: "Sum of first 100 natural numbers.", o: ["5000", "5050", "5100", "4950"], a: 1 },
            { q: "Integral of $e^x$.", o: ["$e^x$", "$xe^x$", "$e^x/x$", "$\log e$"], a: 0 },
            { q: "Product of roots of $x^2 - 7x + 12 = 0$.", o: ["7", "12", "-7", "1"], a: 1 },
            { q: "Angle between parallel vectors.", o: ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$", "$45^\\circ$"], a: 0 }
        ] },
       
       
        "Set 3": { pass: "8901", msg: motives[2], questions: [

                  
  // DIGITAL LOGIC (20 QUESTIONS)
  { q: "What is the decimal equivalent of binary number $(1011)_2$?", o: ["9", "10", "11", "12"], a: 2 },
  { q: "A logic gate which gives output 1 only when all inputs are 1 is?", o: ["OR", "AND", "NAND", "XOR"], a: 1 },
  { q: "How many NAND gates are required to implement a NOT gate?", o: ["1", "2", "3", "4"], a: 0 },
  { q: "Boolean expression $A + A'B$ simplifies to?", o: ["$A$", "$B$", "$A+B$", "$A \cdot B$"], a: 2 },
  { q: "Universal gates are?", o: ["AND, OR", "NAND, NOR", "XOR, XNOR", "NOT"], a: 1 },
  { q: "Number of select lines in a 8-to-1 Multiplexer is?", o: ["2", "3", "4", "8"], a: 1 },
  { q: "2's complement of $(1100)_2$ is?", o: ["$(0011)_2$", "$(0100)_2$", "$(0010)_2$", "$(1111)_2$"], a: 1 },
  { q: "A full adder can add how many bits simultaneously?", o: ["1", "2", "3", "4"], a: 2 },
  { q: "Which flip-flop is used as a basic memory element?", o: ["SR", "JK", "D", "T"], a: 2 },
  { q: "De Morgan's first law states $(A+B)'$ is equal to?", o: ["$A' + B'$", "$A' \cdot B'$", "$A+B$", "$A \cdot B$"], a: 1 },
  { q: "Hexadecimal equivalent of decimal 15 is?", o: ["E", "F", "10", "A"], a: 1 },
  { q: "A decoder with $n$ input lines has how many output lines?", o: ["$n$", "$2n$", "$2^n$", "$n^2$"], a: 2 },
  { q: "What is the base of the Octal number system?", o: ["2", "8", "10", "16"], a: 1 },
  { q: "JK flip-flop toggle condition occurs when?", o: ["J=0, K=0", "J=1, K=0", "J=0, K=1", "J=1, K=1"], a: 3 },
  { q: "Which gate is known as the staircase bulb logic gate?", o: ["AND", "OR", "XOR", "XNOR"], a: 2 },
  { q: "K-map is used for?", o: ["Logic minimization", "Circuit design", "State counting", "Memory storage"], a: 0 },
  { q: "Propagation delay is measured in?", o: ["Seconds", "Milliseconds", "Nanoseconds", "Microseconds"], a: 2 },
  { q: "Which logic family is known for lowest power consumption?", o: ["TTL", "ECL", "CMOS", "RTL"], a: 2 },
  { q: "A ripple counter is also called?", o: ["Synchronous", "Asynchronous", "Parallel", "Static"], a: 1 },
  { q: "$(1010)_2$ in 1's complement is?", o: ["$(0101)_2$", "$(1111)_2$", "$(0000)_2$", "$(1011)_2$"], a: 0 },

  // OPERATING SYSTEMS (20 QUESTIONS)
  { q: "Which of the following is NOT a CPU scheduling algorithm?", o: ["FCFS", "SJF", "Round Robin", "HTTP"], a: 3 },
  { q: "A process that is currently in main memory and waiting for CPU is in?", o: ["New", "Ready", "Running", "Blocked"], a: 1 },
  { q: "Banker's Algorithm is used for deadlock?", o: ["Prevention", "Avoidance", "Detection", "Recovery"], a: 1 },
  { q: "The size of Virtual Memory depends on?", o: ["RAM size", "Address Bus size", "CPU speed", "Disk speed"], a: 1 },
  { q: "Which command in UNIX is used to list files?", o: ["dir", "list", "ls", "cat"], a: 2 },
  { q: "A situation where two or more processes are waiting for each other is called?", o: ["Starvation", "Deadlock", "Thrashing", "Paging"], a: 1 },
  { q: "What is the primary function of the OS Kernel?", o: ["User Interface", "Managing Hardware", "Running Word", "None"], a: 1 },
  { q: "Which scheduling algorithm gives minimum average waiting time?", o: ["FCFS", "SJF", "RR", "Priority"], a: 1 },
  { q: "Page fault occurs when?", o: ["Page is in memory", "Page is NOT in memory", "RAM is full", "Process terminates"], a: 1 },
  { q: "In UNIX, which command changes file permissions?", o: ["chown", "chmod", "grep", "mv"], a: 1 },
  

  // DATA STRUCTURES (10 QUESTIONS)
  { q: "Which data structure follows the LIFO principle?", o: ["Queue", "Stack", "Linked List", "Tree"], a: 1 },
  { q: "Time complexity of Binary Search is?", o: ["$O(n)$", "$O(n^2)$", "$O(log n)$", "$O(1)$"], a: 2 },
  { q: "Which data structure is used for BFS traversal of a graph?", o: ["Stack", "Queue", "Tree", "Array"], a: 1 },
  { q: "In a Linked List, the last node's next pointer points to?", o: ["Head", "Previous Node", "Null", "Self"], a: 2 },
  { q: "Recursive functions are implemented using which data structure?", o: ["Queue", "Stack", "Array", "Graph"], a: 1 },
  { q: "A queue where insertion/deletion can happen from both ends is?", o: ["Priority Queue", "Deque", "Circular Queue", "Linear Queue"], a: 1 },
  { q: "Worst-case time complexity of Quick Sort is?", o: ["$O(n log n)$", "$O(n^2)$", "$O(n)$", "$O(log n)$"], a: 1 },
  { q: "Height of a single node binary tree is?", o: ["0", "1", "2", "-1"], a: 0 },
  { q: "Which sorting algorithm is known as the stable divide & conquer algorithm?", o: ["Quick Sort", "Merge Sort", "Bubble Sort", "Heap Sort"], a: 1 },
  { q: "In a Max-Heap, the root element is always?", o: ["Minimum", "Maximum", "Zero", "Random"], a: 1 },


                   { q: "$\\lim_{x \\to \\infty} 1/x = ?$", o: ["1", "0", "$\\infty$", "None"], a: 1 },
            { q: "$\\int x^n dx = ?$", o: ["$nx^{n-1}$", "$\\frac{x^{n+1}}{n+1}$", "$x^{n+1}$", "$nx$"], a: 1 },
            { q: "Matrix A is symmetric if?", o: ["$A = A^T$", "$A = -A^T$", "$A = I$", "$A = 0$"], a: 0 },
            { q: "Derivative of $\\cos x$.", o: ["$\\sin x$", "$-\\sin x$", "$\\tan x$", "$\\sec x$"], a: 1 },
            { q: "Root of $3x - 9 = 0$.", o: ["1", "3", "-3", "0"], a: 1 },
            { q: "Area under $y=x$ from 0 to 2.", o: ["1", "2", "4", "0.5"], a: 1 },
            { q: "Coefficient of $x^2$ in $(x+1)^2$.", o: ["0", "1", "2", "x"], a: 1 },
            { q: "$\\{1, 2\\} \\cap \\{3, 4\\} = ?$", o: ["$\\{1, 2, 3, 4\\}$", "$\\{2, 3\\}$", "$\\{\\}$", "$\\{0\\}$"], a: 2 },
            { q: "Vector magnitude of $(3,4)$.", o: ["5", "7", "25", "1"], a: 0 },
            { q: "Prob. of drawing Ace from 52 cards.", o: ["1/13", "1/52", "4/13", "1/26"], a: 0 },
            { q: "Derivative of constant $k$.", o: ["$k$", "$1$", "$0$", "$k^2$"], a: 2 },
            { q: "Is 2 a prime number?", o: ["Yes", "No", "Depends", "Only even"], a: 0 },
            { q: "Value of $\tan 45^\\circ$.", o: ["0", "1", "$\\sqrt{3}$", "$1/\\sqrt{3}$"], a: 1 },
            { q: "Transpose of Row matrix is?", o: ["Row", "Column", "Square", "Diagonal"], a: 1 },
            { q: "Distance formula $d = ?$", o: ["$\\sqrt{x^2+y^2}$", "$x+y$", "$x^2-y^2$", "$2x+2y$"], a: 0 },
            { q: "$\int e^{2x} dx$.", o: ["$e^{2x}$", "$\\frac{1}{2}e^{2x}$", "$2e^{2x}$", "$x e^{2x}$"], a: 1 },
            { q: "Inverse of Matrix exists if?", o: ["$|A| = 0$", "$|A| \\neq 0$", "$A=I$", "$A$ is row matrix"], a: 1 },
            { q: "What is $3^3$?", o: ["9", "18", "27", "81"], a: 2 },
            { q: "Arithmetic progression $d$ stands for?", o: ["Distance", "Difference", "Diameter", "Division"], a: 1 },
            { q: "$\log(AB) = ?$", o: ["$\\log A \\times \\log B$", "$\\log A + \\log B$", "$\\log A - \\log B$", "$\\log(A+B)$"], a: 1 },
            { q: "Roots of $x^2 - 1 = 0$.", o: ["1", "-1", "$\\pm 1$", "0"], a: 2 },
            { q: "If $\vec{a} \\cdot \\vec{b} = 0$, vectors are?", o: ["Parallel", "Perpendicular", "Equal", "Opposite"], a: 1 },
            { q: "Value of $\pi$ approx.", o: ["3", "3.14", "3.14159", "All"], a: 3 },
            { q: "Find the next number in the series: 2, 6, 12, 20, 30, ?", o: ["A)40", "B)42", "C)44", "D)46"], a: 1 },
            { q: "If 'COFFEE' is coded as 'EEFFOC', how is 'TEA' coded?", o: ["A)AET", "B)EAT", "C)AET", "D)TEA"], a: 0 },
            { q: "Which word does NOT belong with the others?", o: ["A)Monitor", "B)Keyboard", "C)Mouse",  "D)Windows"], a: 1 },
            { q: "A is the mother of B. B is the sister of C. D is the son of C. How is A related to D?", o: ["A)Mother", "B)Grandmother", "C)Aunt", "D)Sister"], a: 1 },
            { q: " Find the odd one out: 27, 64, 125, 144", o: ["A)27", "B)64", "C)125", "D)144"], a: 3 },
            { q: "If '+' means '×', '×' means '÷', and '÷' means '-', then what is 10 + 5 × 2 ÷ 5?", o: ["A)20", "B)15", "C)25", "D)30"], a: 0 }
        ] },
        "Set 4": { pass: "1234", msg: motives[3], questions: [
                  // quizData["Set 4"].questions
              
    // --- ADVANCED OPERATING SYSTEMS (CUET/MCA Level) ---
    { "q": "In a system with 3 processes and 4 total resources, each process needs a maximum of 2 resources. Can deadlock occur under any circumstance?", o: ["Yes", "No", "Depends on OS Scheduler", "Depends on resource type"], "a": 1 },
    { "q": "Which scheduling algorithm is associated with optimal average waiting time but is impractical to implement in real-time OS?", o: ["FCFS", "SJF Preemptive", "SJF Non-Preemptive", "Round Robin"], "a": 2 },
    { "q": "Which technique is a hardware solution to the Critical Section problem that disables interrupts?", o: ["Semaphores", "Monitors", "TestAndSet instruction", "Spinlocks"], "a": 2 },
    { "q": "If a logical address space is 32 KB and the page size is 4 KB, how many pages are there in the logical address space?", o: ["4", "8", "16", "1024"], "a": 1 },
    { "q": "Thrashing is primarily a performance issue caused by excessive ___?", o: ["CPU cycles", "Disk I/O time", "Paging/Swapping activity", "System calls"], "a": 2 },
    { "q": "What is the primary purpose of a 'Dirty Bit' in memory management?", o: ["To indicate a faulty page", "To indicate if a page has been modified since being loaded", "To indicate read-only status", "To indicate a page is new"], "a": 1 },
    { "q": "Which condition of deadlock prevention denies the 'Hold and Wait' condition?", o: ["Mutual Exclusion", "Circular Wait", "No Preemption", "Resource Ordering"], "a": 2 },
    { "q": "Which Unix system call loads a new program into the current process space?", o: ["fork()", "exec()", "wait()", "exit()"], "a": 1 },
    { "q": "Banker's Algorithm determines safety by checking if the system can reach a ___ state.", o: ["Deadlocked", "Unsafe", "Safe", "Starved"], "a": 2 },
    { "q": "The 'Convoy Effect' most significantly impacts the efficiency of which disk scheduling algorithm?", o: ["SSTF", "SCAN", "FCFS", "LOOK"], "a": 2 },

    // --- ADVANCED DATA STRUCTURES & ALGORITHMS (Complexity, AVL, Heap, Graph) ---
    { "q": "What is the worst-case time complexity for searching an element in a Binary Search Tree?", o: ["O(log n)", "O(n)", "O(n log n)", "O(1)"], "a": 1 },
    { "q": "The time complexity of the Prim's algorithm for finding a Minimum Spanning Tree using a min-priority queue is?", o: ["O(V^3)", "O(E log V)", "O(V + E)", "O(V log V + E log V)"], "a": 3 },
    { "q": "Which sorting algorithm provides a guaranteed time complexity of O(n log n) in all cases (best, average, worst)?", o: ["Quick Sort", "Merge Sort", "Heap Sort", "Insertion Sort"], "a": 1 },
    { "q": "What is the amortized time complexity for insertion into a dynamic array that occasionally resizes?", o: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], "a": 2 },
    { "q": "The maximum balance factor allowed for any node in an AVL tree is?", o: ["0", "1", "2", "-1"], "a": 1 },
    { "q": "Which graph traversal technique uses a Queue data structure to manage vertices?", o: ["DFS", "Topological Sort", "Dijkstra", "BFS"], "a": 3 },
    { "q": "In a max-heap array representation, where is the smallest element located?", o: ["Root", "First leaf node", "Any leaf node", "Anywhere in the array"], "a": 2 },
    { "q": "What is the time complexity of the 'delete-min' operation in a Binary Min-Heap?", o: ["O(n)", "O(1)", "O(log n)", "O(n log n)"], "a": 2 },
    { "q": "Which algorithm is used for all-pairs shortest paths in a weighted graph?", o: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Kruskal"], "a": 2 },
    { "q": "Which data structure is most suitable for a compiler's syntax analyzer (parsing expressions)?", o: ["Queue", "Linked List", "Stack", "Binary Tree"], "a": 2 },

    // --- ADVANCED DIGITAL LOGIC & ARCHITECTURE (CUET/MCA Level) ---
    { "q": "The minimum number of 2-input NAND gates required to implement a 2-input XOR gate is?", o: ["2", "3", "4", "5"], "a": 2 },
    { "q": "A 12-bit address bus can directly access how many bytes of memory?", o: ["1024 bytes", "2048 bytes", "4096 bytes", "8192 bytes"], "a": 2 },
    { "q": "The 'Hamming Distance' required to detect a 2-bit error is?", o: ["2", "3", "4", "1"], "a": 1 },
    { "q": "Which logic family provides the highest speed but also consumes the most power?", o: ["TTL", "CMOS", "ECL", "RTL"], "a": 2 },
    { "q": "Which of the following is an example of a 'self-complementing' code?", o: ["BCD 8421", "Gray Code", "Excess-3 Code", "ASCII"], "a": 2 },
    { "q": "How many 2-input XOR gates are required to implement a 4-bit parity generator?", o: ["2", "3", "4", "5"], "a": 1 },
    { "q": "A 4-bit Johnson Counter will have how many valid stable states?", o: ["4", "8", "16", "10"], "a": 1 },
    { "q": "Which type of memory uses capacitors that require periodic refreshing?", o: ["SRAM", "DRAM", "ROM", "Flash"], "a": 1 },
    { "q": "Booth's Algorithm is primarily used for efficient implementation of which arithmetic operation?", o: ["Addition", "Subtraction", "Division", "Signed Multiplication"], "a": 3 },
    { "q": "The time a signal needs to be stable before the clock edge arrives is called?", o: ["Hold time", "Propagation delay", "Setup time", "Clock skew"], "a": 2 },
    

            { q: "If $n(X) = 17$, $n(Y) = 23$, and $n(X \\cup Y) = 38$, find $n(X \\cap Y)$.", o: ["2", "4", "5", "8"], a: 0 },
            { q: "A bag contains 4 red and 5 black balls. Find the probability of drawing at least 3 black balls from 4 draws.", o: ["$5/14$", "$11/167$", "$7/18$", "$13/184$"], a: 0 },
            { q: "The power set of a set with 4 elements has how many elements?", o: ["4", "8", "16", "32"], a: 2 },
            { q: "If $P(A) = 0.5$, $P(B) = 0.3$, and $A, B$ are independent, find $P(A \\cap B)$.", o: ["0.8", "0.2", "0.15", "0.5"], a: 2 },
            { q: "Find the mean of the first 5 natural numbers.", o: ["2", "3", "4", "5"], a: 1 },
  // ... Paste 18 more similar logic questions for Set 4 ...

        ] },
        "Set 5": { pass: "1234", msg: motives[4], questions: [
            // quizData["Set 5"].questions
            { q: "What is a 'Zombie' process?", o: ["Running process", "Terminated but exists in table", "Waiting for I/O", "System process"], a: 1 },
        { q: "Which memory management scheme solves external fragmentation?", o: ["Paging", "Segmentation", "Contiguous", "Fixed"], a: 0 },
        { q: "The 'Shell' in OS acts as?", o: ["Compiler", "Interpreter", "Hardware", "Virus"], a: 1 },
        { q: "Time quantum is related to which algorithm?", o: ["FCFS", "Priority", "Round Robin", "SJF"], a: 2 },
        { q: "Which OS is specifically designed for real-time tasks?", o: ["Windows 10", "RTOS", "MS-DOS", "Ubuntu"], a: 1 },
        { q: "Wait() and Signal() operations are used in?", o: ["Paging", "Semaphores", "Scheduling", "Fragmentation"], a: 1 },
        { q: "MS-DOS is a ___ user operating system.", o: ["Single", "Multi", "Distributed", "Real-time"], a: 0 },
        { q: "Which command checks the error status of a hard disk in Windows?", o: ["FORMAT", "CHKDSK", "DIR", "SCAN"], a: 1 },
        { q: "Virtual memory uses which area to extend RAM?", o: ["Cache", "Hard Disk", "ROM", "Register"], a: 1 },
        { q: "Linux is based on which operating system?", o: ["Windows", "UNIX", "Mac OS", "DOS"], a: 1 },
    // --- OS ---
    { q: "Which file system approach prevents external fragmentation completely?", o: ["Contiguous Allocation", "Linked Allocation", "FAT", "Indexed Allocation"], a: 1 },
    { q: "What is the primary challenge in a symmetric multiprocessing (SMP) system regarding OS kernels?", o: ["Paging issues", "Deadlock", "Ensuring data coherency/synchronization across CPUs", "Thrashing"], a: 2 },
    { q: "In a 'Monolithic Kernel', where do device drivers typically execute?", o: ["User Space", "Separate process space", "Kernel Space", "Hardware only"], a: 2 },
    { q: "Which Unix signal is typically used to gracefully terminate a process, allowing it to clean up before exiting?", o: ["SIGKILL", "SIGSTOP", "SIGSEGV", "SIGTERM"], a: 3 },
    { q: "What is the minimum number of resources required per process to guarantee a deadlock-free system if there are 'n' processes and 'm' total resources (m > n)?", o: ["1", "2", "m/n", "(m/n) + 1"], a: 0 },
    { q: "The time slice in the Round Robin algorithm must be carefully chosen to avoid excessive what?", o: ["Starvation", "Deadlock", "CPU utilization", "Context switching overhead"], a: 3 },
    { q: "What does the 'mmap()' system call in Unix achieve?", o: ["Memory allocation in kernel", "Mapping files or devices into memory space", "Creating a new process", "Managing mutex locks"], a: 1 },
    { q: "Belady's Anomaly is a phenomenon observed in which memory management algorithm?", o: ["LRU", "Optimal Page Replacement", "FIFO", "SJF"], a: 2 },
    { q: "Which disk scheduling algorithm ensures fairness and prevents starvation by sweeping the disk entirely in both directions?", o: ["SSTF", "FCFS", "C-SCAN", "LOOK"], a: 2 },
    { q: "In which process state is a process waiting for a resource or I/O completion?", o: ["Running", "Ready", "New", "Waiting"], a: 3 },

    // --- DSA ---
    { q: "What is the time complexity of the Floyd-Warshall algorithm for all-pairs shortest paths?", o: ["O(V^2)", "O(V*E)", "O(E log V)", "O(V^3)"], a: 3 },
    { q: "Which graph algorithm uses a Queue to maintain order and explores neighbors level by level?", o: ["DFS", "Dijkstra", "Prim's", "BFS"], a: 3 },
    { q: "The worst-case time complexity of Bubble Sort is O(n^2). What is its best-case complexity if the array is already sorted?", o: ["O(n log n)", "O(n^2)", "O(n)", "O(1)"], a: 2 },
    { q: "What is the recurrence relation for the optimal solution to the Merge Sort algorithm?", o: ["T(n) = T(n-1) + n", "T(n) = T(n/2) + 1", "T(n) = 2T(n/2) + O(n)", "T(n) = T(n-1) + O(1)"], a: 2 },
    { q: "Which property does a min-heap satisfy?", o: ["Parent key is always greater than children keys", "Parent key is always smaller than children keys", "Tree is always balanced by height of -1, 0, or 1", "All leaf nodes have same depth"], a: 1 },
    { q: "Which operation is most efficient in a Circular Linked List compared to a Singly Linked List?", o: ["Searching an element", "Inserting at the beginning", "Deleting a specific node", "Inserting at the end"], a: 3 },
    { q: "In a Hash Table using linear probing, which metric measures how full the table is (items / total slots)?", o: ["Density", "Load Factor", "Collision Rate", "Efficiency Factor"], a: 1 },
    { q: "Which traversal technique generates a sorted output for a Binary Search Tree?", o: ["Pre-order", "Post-order", "Level-order", "In-order"], a: 3 },
    { q: "How many null pointers are there in a full binary tree with 'N' internal nodes?", o: ["N", "N+1", "2N", "N-1"], a: 1 },
    { q: "Which algorithm finds the MST where edges are added one by one in increasing order of weight, provided they don't form a cycle?", o: ["Prim's", "Dijkstra's", "Kruskal's", "Bellman-Ford"], a: 2 },

    // --- Digital Logic ---
    { q: "The decimal equivalent of the binary number (110.101)₂ is:", o: ["6.5", "7.125", "6.625", "7.625"], a: 3 },
    { q: "Which Boolean algebra law states that A + (B.C) = (A+B).(A+C)?", o: ["Commutative Law", "Associative Law", "Distributive Law", "Consensus Law"], a: 2 },
    { q: "How many 3-to-8 decoders with enable input are needed to construct a 4-to-16 decoder?", o: ["2", "3", "4", "8"], a: 1 },
    { q: "Which code is known as a unit-distance code?", o: ["BCD", "Excess-3", "8421", "Gray Code"], a: 3 },
    { q: "A PISO (Parallel In Serial Out) shift register is primarily used for:", o: ["Data conversion", "Frequency division", "Temporary storage", "Serial communication output"], a: 0 },
    { q: "What is the main purpose of an 'Encoder' circuit?", o: ["Convert analog to digital", "Convert 2^n inputs to n outputs", "Convert BCD to 7-segment", "Select one input from many"], a: 1 },
    { q: "A BCD counter counts from 0 to 9. It is essentially a MOD-X counter where X is?", o: ["8", "9", "10", "16"], a: 2 },
    { q: "Which multivibrator generates a continuous train of clock pulses without external trigger?", o: ["Monostable", "Bistable", "Astable", "Schmitt Trigger"], a: 2 },
    { q: "The 2's complement of 1000 is:", o: ["0111", "1000", "0101", "1011"], a: 1 },
    { q: "Which logic family has high noise margin but slow speed?", o: ["ECL", "TTL", "CMOS", "I2L"], a: 2 },
     
         { q: "If $A = [ 1, 2; 3, 4 ]$, then find $|A|$.", o: ["10", "2", "-2", "-10"], a: 2 },
         { q: "A square matrix $A$ is singular if:", o: ["$|A| = 1$", "$|A| = 0$", "$|A| = -1$", "$A = I$"], a: 1 },
         { q: "What is the transpose of a Symmetric matrix?", o: ["$-A$", "$I$", "$A$", "$0$"], a: 2 },
         { q: "If $A$ is a $3 \\times 3$ matrix and $|A| = 5$, find $|2A|$.", o: ["10", "20", "40", "80"], a: 2 }, // |kA| = k^n|A|
         { q: "The sum of the eigenvalues of a matrix is equal to its:", o: ["Determinant", "Rank", "Trace", "Inverse"], a: 2 },
          { q: "Arrange in a logical order: 1. Table 2. Tree 3. Wood 4. Seed 5. Plant", o: ["A)4,5,2,3,1", "B)4,5,3,2,1", "C)1,3,2,5,4", "D)5,4,3,2,1"], a: 0 },
            { q: "How many triangles are in a square with its two diagonals?", o: ["A)4", "B)6", "C)8", "D)10"], a: 2 },
            { q: "If 'Sun' is called 'Moon', 'Moon' is 'Star', and 'Star' is 'Cloud', where do we see at night?", o: ["A)Moon", "B)Star", "C)Cloud",  "D)Sun"], a: 1 },
            { q: "Find the next term: Z, W, T, Q, ?", o: ["A)N", "B)M", "C)O", "D)P"], a: 0 },
            { q: "Which number replaces the question mark? 3 : 27 :: 4 : ? ", o: ["A)16", "B)64", "C)28", "D)32"], a: 1 },
            { q: "If 'PEN' is 35, then 'HEN' is?", o: ["A)27", "B)30", "C)35", "D)40"], a: 0 },
            { q: "Which number is the odd one: 13, 23, 33, 43, 53?", o: ["A)23", "B)33", "C)43", "D)53"], a: 1 },
            { q: "If A+B means A is brother of B, A-B means A is sister of B, what does P+Q-R mean?", o: ["A)P is brother of R", "B)P is father of R", "C)P is sister of R", "D)None"], a: 0 },
            { q: "Clock is to Time as Thermometer is to?", o: ["A)Heat", "B)Radiation", "C)Temperature",  "D)Energy"], a: 2 },
            { q: "Complete the series: 7, 10, 8, 11, 9, 12, ?", o: ["A)7", "B)10", "C)12", "D)13"], a: 1 },
            { q: "How many squares are there in a 3x3 grid? ", o: ["A)9", "B)10", "C)14", "D)13"], a: 2 },
            { q: "Find the missing number: 1, 4, 9, 16, 25, ?", o: ["A)30", "B)36", "C)49", "D)40"], a: 1 }


        ] },
        "Set 6": { pass: "1234", msg: motives[5], questions: [
                  // quizData["Set 6"].questions
                
    // --- OS (Operating Systems) ---
    { q: "Banker's Algorithm is used for?", o: ["Deadlock Prevention", "Deadlock Avoidance", "Deadlock Recovery", "Mutual Exclusion"], a: 1 },
    { q: "Which page replacement algorithm suffers from Belady's Anomaly?", o: ["LRU", "Optimal", "FIFO", "LIFO"], a: 2 },
    { q: "What is the main function of the 'Dispatcher'?", o: ["Process Scheduling", "Context Switching", "Memory Management", "I/O Handling"], a: 1 },
    { q: "A situation where a process waits indefinitely for a resource?", o: ["Starvation", "Deadlock", "Aging", "Throttling"], a: 0 },
    { q: "Which scheduler selects processes from the pool and loads them into memory?", o: ["Short-term", "Long-term", "Medium-term", "CPU Scheduler"], a: 1 },
    { q: "Inter-process communication (IPC) can be done via?", o: ["Shared Memory", "Paging", "Segmentation", "Fragmentation"], a: 0 },
    { q: "Thrashing occurs when OS spends more time in ___?", o: ["Execution", "I/O", "Paging", "Scheduling"], a: 2 },
    { q: "The 'Critical Section' problem is related to?", o: ["Process Sync", "Deadlock", "Virtual Memory", "Storage"], a: 0 },
    { q: "Which command in Linux changes file permissions?", o: ["chown", "chmod", "chroot", "ls"], a: 1 },
    { q: "A 'Trap' in OS is an exception generated by?", o: ["Hardware", "User", "Software", "Kernel"], a: 2 },

    // --- DSA (Data Structures & Algorithms) ---
    { q: "Worst-case time complexity of QuickSort is?", o: ["O(n log n)", "O(n^2)", "O(n)", "O(1)"], a: 1 },
    { q: "Which data structure is used for Breadth-First Search (BFS)?", o: ["Stack", "Queue", "Tree", "Graph"], a: 1 },
    { q: "A Binary Search Tree's 'In-order' traversal gives?", o: ["Random order", "Sorted order", "Reverse order", "Level order"], a: 1 },
    { q: "Postfix expression of (A+B) is?", o: ["+AB", "AB+", "A+B", "BA+"], a: 1 },
    { q: "Which sorting algorithm is 'Stable' by default?", o: ["Merge Sort", "Quick Sort", "Heap Sort", "Selection Sort"], a: 0 },
    { q: "Linked List is preferred over Arrays for?", o: ["Random access", "Memory efficiency", "Insertion/Deletion", "Searching"], a: 2 },
    { q: "Height of a balanced binary tree with 'n' nodes is?", o: ["O(n)", "O(log n)", "O(1)", "O(n^2)"], a: 1 },
    { q: "Which hashing technique avoids collisions using a linked list?", o: ["Linear Probing", "Chaining", "Quadratic Probing", "Double Hashing"], a: 1 },
    { q: "Maximum nodes at level 'i' of a binary tree?", o: ["2*i", "2^i", "i^2", "2^(i-1)"], a: 1 },
    { q: "Priority Queue is usually implemented using?", o: ["Stack", "Linked List", "Heap", "Array"], a: 2 },

    // --- DIGITAL LOGIC & ARCHITECTURE ---
    { q: "Which gate is known as the 'Inequality Detector'?", o: ["AND", "OR", "XOR", "NAND"], a: 2 },
    { q: "16:1 Multiplexer needs how many selection lines?", o: ["2", "3", "4", "8"], a: 2 },
    { q: "The 2's complement of 1010 is?", o: ["0101", "0110", "1100", "1011"], a: 1 },
    { q: "Which flip-flop does not have a race-around condition?", o: ["SR", "JK", "Master-Slave JK", "D"], a: 2 },
    { q: "A Half-Adder consists of which gates?", o: ["XOR & AND", "XOR & OR", "AND & OR", "NOR & NAND"], a: 0 },
    { q: "Hexadecimal equivalent of decimal 15 is?", o: ["E", "F", "10", "A"], a: 1 },
    { q: "Which register holds the address of the next instruction?", o: ["Accumulator", "Program Counter", "Instruction Register", "MAR"], a: 1 },
    { q: "Cache memory is made of?", o: ["DRAM", "SRAM", "ROM", "Flash"], a: 1 },
    { q: "A 4-bit group is called a?", o: ["Byte", "Nibble", "Word", "Bit"], a: 1 },
    { q: "Boolean algebra: A + 1 = ?", o: ["A", "1", "0", "A+1"], a: 1 },

    // --- MIXED CS FUNDAMENTALS ---
    { q: "In HTTP, which status code means 'Not Found'?", o: ["200", "404", "500", "301"], a: 1 },
    { q: "Which layer in OSI is responsible for Routing?", o: ["Data Link", "Network", "Transport", "Physical"], a: 1 },
    { q: "TCP is a ___ protocol.", o: ["Connection-oriented", "Connectionless", "Stateless", "Broadcast"], a: 0 },
    { q: "Primary Key + Optional Columns = ?", o: ["Super Key", "Candidate Key", "Foreign Key", "Unique Key"], a: 0 },
    { q: "SQL command to remove all records but keep structure?", o: ["DROP", "DELETE", "TRUNCATE", "REMOVE"], a: 2 },
    { q: "Which sorting is best if the array is already almost sorted?", o: ["Quick Sort", "Insertion Sort", "Selection Sort", "Heap Sort"], a: 1 },
    { q: "Size of an 'int' in Java is?", o: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"], a: 1 },
    { q: "A 'Deadlock' can be broken by?", o: ["Killing a process", "Ignoring it", "Adding more RAM", "Wait and Signal"], a: 0 },
    { q: "Which is a non-linear data structure?", o: ["Stack", "Queue", "Graph", "Array"], a: 2 },
    { q: "The process of starting an OS is called?", o: ["Starting", "Booting", "Loading", "Triggering"], a: 1 },

            { q: "Find the limit: $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.", o: ["0", "3", "6", "9"], a: 2 },
            { q: "What is the derivative of $\\tan x$?", o: ["$\\sec x$", "$\\sec^2 x$", "$\\cot x$", "$\\cos^2 x$"], a: 1 },
          { q: "Find the slope of the curve $y = x^2$ at $x = 2$.", o: ["2", "4", "1", "0"], a: 1 },
          { q: "The derivative of $e^{3x}$ is:", o: ["$e^{3x}$", "$3e^{3x}$", "$\\frac{1}{3}e^{3x}$", "$x e^{3x}$"], a: 1 },
          { q: "At the point of maxima, the first derivative is:", o: ["Positive", "Negative", "Zero", "One"], a: 2 },
           { q: "Find the odd letter group: AZ, MN, CX, GT, KP", o: ["A)AZ", "B)KP", "C)MN", "D)GT"], a: 1 },
            { q: "If 'RED' is coded as 6720, then 'GREEN' is?", o: ["A)1677199", "B)16717209", "C)9207716", "D)578755"], a: 2 },
            { q: "If 24th March of a year is Tuesday, what day will be 24th April?", o: ["A)Friday", "B)Saturday", "C)Sunday",  "D)Monday"], a: 1 },
            { q: "Which is the next term: a, c, f, j, o, ?", o: ["A)u", "B)t", "C)v", "D)s"], a: 0 },
            { q: "Complete the analogy: 8 : 28 :: 27 : ? ", o: ["A)65", "B)64", "C)55", "D)81"], a: 2 },
            { q: "If 'Rain' is 'Water', 'Water' is 'Road', 'Road' is 'Cloud', 'Cloud' is 'Sky', where do aeroplanes fly?", o: ["A)Cloud", "B)Sky", "C)Water", "D)Road"], a: 1 },
            { q: "If South-East becomes North, and North-East becomes West, what will West become?", o: ["A)South-East", "B)South-West", "C)North-West", "D)North-East"], a: 0 },
            { q: "If 'BOOK' is 43, what is 'PEN'?", o: ["A)35", "B)40", "C)30", "D)45"], a: 0 },
            { q: "Choose the pair that shows the same relationship: Light : Blind", o: ["A)Speech : Dumb", "B)Language : Deaf", "C)Tongue : Sound",  "D)None"], a: 0 },
            { q: "Next term: 5, 11, 23, 47, 95, ?", o: ["A)190", "B)191", "C)161", "D)199"], a: 1 },
            { q: "In a group of cows and hens, the number of legs is 14 more than twice the number of heads. The number of cows is? ", o: ["A)5", "B)7", "C)10", "D)12"], a: 1 },
            { q: "Find the odd one: 8, 27, 64, 100, 125", o: ["A)8", "B)64", "C)100", "D)125"], a: 2 }


        ] },
        "Set 7": { pass: "1234", msg: motives[0], questions: [
            // quizData["Set 7"].questions
            //cs QUESTION
    // --- ADVANCED OS (Kernel & Concurrency) ---
    { q: "What is the phenomenon where a high-priority process is delayed by a low-priority one?", o: ["Starvation", "Priority Inversion", "Deadlock", "Convoy Effect"], a: 1 },
    { q: "Peterson's Solution is used to solve which problem?", o: ["Paging", "Critical Section", "Deadlock Avoidance", "Cache Miss"], a: 1 },
    { q: "Which scheduling algorithm can result in the 'Convoy Effect'?", o: ["Round Robin", "SJF", "FCFS", "Priority Scheduling"], a: 2 },
    { q: "In a 'Microkernel' architecture, which service runs in User Space?", o: ["CPU Scheduling", "Device Drivers", "File System", "Virtual Memory"], a: 2 },
    { q: "What is 'Thrashing' specifically caused by?", o: ["High CPU usage", "Frequent Page Faults", "Slow I/O", "Low RAM"], a: 1 },
    { q: "A 'Spinlock' is efficient only when?", o: ["Wait time is long", "Wait time is short", "Single core CPU", "RAM is low"], a: 1 },
    { q: "Which Disk Scheduling algorithm is most prone to Starvation?", o: ["SSTF", "SCAN", "LOOK", "FCFS"], a: 0 },
    { q: "Which segment of a process contains 'Dynamic Memory'?", o: ["Stack", "Heap", "Data Segment", "Code Segment"], a: 1 },
    { q: "What is 'Spooling' primarily used for?", o: ["Process Sync", "I/O Buffering", "Memory Paging", "CPU Throttling"], a: 1 },
    { q: "In Unix, which system call creates a new process by duplicating the current one?", o: ["exec()", "fork()", "wait()", "kill()"], a: 1 },

    // --- ADVANCED DSA (Complexities & Trees) ---
    { q: "Time complexity of building a 'Heap' from an unordered array?", o: ["O(n log n)", "O(n)", "O(log n)", "O(n^2)"], a: 1 },
    { q: "In an AVL tree, what is the maximum balance factor allowed?", o: ["0", "1", "2", "-2"], a: 1 },
    { q: "Which sorting algorithm has the best 'Space Complexity'?", o: ["Merge Sort", "Quick Sort", "Heap Sort", "Radix Sort"], a: 2 },
    { q: "Amortized time complexity of 'Dynamic Array' insertion?", o: ["O(1)", "O(n)", "O(log n)", "O(n^2)"], a: 0 },
    { q: "Which graph algorithm is used to find 'All-Pairs Shortest Path'?", o: ["Dijkstra", "Bellman-Ford", "Floyd-Warshall", "Prim's"], a: 2 },
    { q: "What is the worst-case time complexity of 'Red-Black Tree' search?", o: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], a: 1 },
    { q: "Which data structure is best for 'Prefix Search' (Auto-complete)?", o: ["Hash Table", "Trie", "B-Tree", "Binary Search Tree"], a: 1 },
    { q: "Dijkstra's algorithm fails for which type of graphs?", o: ["Directed", "Undirected", "Negative Weight Edges", "Cyclic"], a: 2 },
    { q: "What is the recurrence relation for 'Binary Search'?", o: ["T(n)=T(n-1)+1", "T(n)=T(n/2)+1", "T(n)=2T(n/2)+n", "T(n)=T(n/2)+n"], a: 1 },
    { q: "Number of 'Null' pointers in a Binary Tree with 'N' nodes?", o: ["N", "N+1", "2N", "N-1"], a: 1 },

    // --- ADVANCED DIGITAL LOGIC & ARCHITECTURE ---
    { q: "How many 2x1 MUX are needed to implement a 4x1 MUX?", o: ["2", "3", "4", "1"], a: 1 },
    { q: "Which hazard occurs when an instruction depends on the result of a previous one?", o: ["Structural", "Data Hazard", "Control Hazard", "Branch Hazard"], a: 1 },
    { q: "What is the 'Hamming Distance' for detecting 2-bit errors?", o: ["2", "3", "4", "5"], a: 1 },
    { q: "Which mapping technique in Cache is the most flexible?", o: ["Direct Mapping", "Fully Associative", "Set Associative", "Linear Mapping"], a: 1 },
    { q: "A 12-bit address bus can access how many memory locations?", o: ["1024", "2048", "4096", "8192"], a: 2 },
    { q: "Which flip-flop is used to design a 'Toggle' behavior?", o: ["SR", "D", "T", "Latch"], a: 2 },
    { q: "Booth's Algorithm is used for?", o: ["Division", "Subtraction", "Signed Multiplication", "Floating Point Add"], a: 2 },
    { q: "What is 'DMA' (Direct Memory Access) primarily for?", o: ["Fast CPU", "Bypassing CPU for I/O", "Extending RAM", "Interrupt Handling"], a: 1 },
    { q: "Excess-3 code is also known as?", o: ["Weighted Code", "Self-Complementing Code", "Error Correcting", "Cyclic Code"], a: 1 },
    { q: "Minimal number of NAND gates for an XOR gate?", o: ["3", "4", "5", "6"], a: 1 },

    // --- CS CONCEPTS (DBMS, Networks, Logic) ---
    { q: "Which Normal Form handles 'Multi-valued Dependency'?", o: ["3NF", "BCNF", "4NF", "5NF"], a: 2 },
    { q: "A 'Deadlock' occurs if which of Coffman's conditions are met?", o: ["Any one", "Any two", "All four", "None"], a: 2 },
    { q: "What is the 'Count to Infinity' problem related to?", o: ["Link State Routing", "Distance Vector Routing", "TCP Flow Control", "BGP"], a: 1 },
    { q: "Which TCP field prevents 'Congestion'?", o: ["Sequence Number", "Checksum", "Window Size", "Acknowledgment"], a: 2 },
    { q: "In SQL, which join returns only matching records from both tables?", o: ["Left Join", "Right Join", "Inner Join", "Full Join"], a: 2 },
    { q: "What is the time complexity of 'Sieve of Eratosthenes'?", o: ["O(n)", "O(n log n)", "O(n log log n)", "O(sqrt n)"], a: 2 },
    { q: "The 'Page Size' must always be a ___?", o: ["Prime Number", "Power of 2", "Multiple of 10", "Even Number"], a: 1 },
    { q: "Which protocol is 'Stateless' at the Application Layer?", o: ["TCP", "FTP", "HTTP", "POP3"], a: 2 },
    { q: "What is a 'Race Condition'?", o: ["Process running fast", "Output depends on execution order", "CPU overheating", "Memory Leak"], a: 1 },
    { q: "The 'Pumping Lemma' is used to prove a language is ___?", o: ["Regular", "Not Regular", "Context Free", "Recursive"], a: 1 },


           { q: "Evaluate $\\int_0^{\\pi} \\sin x dx$.", o: ["0", "1", "2", "$-1$"], a: 2 },
           { q: "Find $\\int \\frac{1}{x} dx$.", o: ["$x$", "$log x + C$", "$1$", "$-1/x^2$"], a: 1 },
           { q: "The area under $y = x$ from $x=0$ to $x=2$ is:", o: ["1", "2", "4", "8"], a: 1 },
           { q: "Evaluate $\\int e^x dx$.", o: ["$e^x + C$", "$x e^x$", "$log e$", "1"], a: 0 },
           { q: "Integration by parts formula $\\int u dv$ is:", o: ["$uv - \\int v du$", "$uv + \\int v du$", "$v du - uv$", "$0$"], a: 0 },
           //REASIONING
            { q: "Odd one out: Ear, Eye, Nose, Throat", o: ["A)Throat", "B)Ear", "C)Eye", "D)Nose"], a: 0 },
            { q: "Next number: 10, 100, 200, 310, ?", o: ["A)400", "B)410", "C)430", "D)420"], a: 2 },
            { q: "Which word can't be formed from 'CONSTITUTIONAL'?", o: ["A)TALENT", "B)CONSULT", "C)LOCATION",  "D)TUITION"], a: 0 },
            { q: "If Sunday is the day after tomorrow, what day was yesterday?", o: ["A)Wednesday", "B)Thursday", "C)Tuesday", "D)Friday"], a: 1 },
            { q: "If 5×4=15, 7×8=49, then6×5=? ", o: ["A)24", "B)30", "C)25", "D)28"], a: 0 },
            { q: "Find the number of triangles in a pentagon (star shape)?", o: ["A)5", "B)10", "C)12", "D)15"], a: 1 },
            { q: "If 'A' is 1, 'B' is 2... 'Z' is 26, what is the sum of 'CAT'?", o: ["A)24", "B)20", "C)22", "D)26"], a: 0 },
            { q: "Point out the odd one: January, May, July, November", o: ["A)January", "B)May", "C)July", "D)November"], a: 3 },
            { q: "Complete the series: B2CD, ____, BCD4, B5CD, BC6D", o: ["A)B2C2D", "B)BC3D", "C)B2C3D",  "D)BCD7"], a: 1 },
            { q: "Find the missing number: 4, 9, 25, 49, 121, ?", o: ["A)144", "B)169", "C)196", "D)225"], a: 1 },
            { q: "In a code 'TIGER' is 'GRTVH', then 'HORSE' is: ", o: ["A)SLIHV", "B)SILHV", "C)SHILV", "D)SLHIV"], a: 1 },
            { q: "Complete the series: A, C, F, J, ?, V", o: ["A)L", "B)M", "C)O", "D)P"], a: 2 }


        ] },
        "Set 8": { pass: "1234", msg: motives[1], questions: [
            // quizData["Set 8"].questions
            //cs QUESTION
    // --- OPERATING SYSTEMS (CPU, Memory, Deadlocks) ---
    { q: "In Round Robin, if Time Quantum is very large, it behaves like?", o: ["SJF", "FCFS", "LIFO", "Priority"], a: 1 },
    { q: "Which scheduling algorithm provides minimum average waiting time?", o: ["FCFS", "Preemptive SJF", "Round Robin", "Non-preemptive SJF"], a: 1 },
    { q: "A system has 3 processes sharing 4 resources. Each needs max 2 resources. Can deadlock occur?", o: ["Yes", "No", "Depends on OS", "Maybe"], a: 1 },
    { q: "Which memory management allows processes to be stored non-contiguously in physical memory?", o: ["Fixed Partitioning", "Paging", "Dynamic Partitioning", "Contiguous"], a: 1 },
    { q: "In Segmentation, a 'Segment Table' contains?", o: ["Page No & Offset", "Base & Limit", "Segment No & Size", "Frame No"], a: 1 },
    { q: "What is the size of the Page Table if logical address is 32-bit and page size is 4KB?", o: ["2^12 entries", "2^20 entries", "2^32 entries", "2^10 entries"], a: 1 },
    { q: "The 'Dirty Bit' in a page table entry is used to show?", o: ["Page is faulty", "Page is modified", "Page is read-only", "Page is empty"], a: 1 },
    { q: "Which deadlock recovery method is most drastic?", o: ["Resource Preemption", "Process Termination", "Rollback", "Circular Wait Removal"], a: 1 },
    { q: "Optimal Page Replacement is used as a benchmark because it?", o: ["Is easy to implement", "Minimizes page faults", "Uses FIFO logic", "Uses LRU logic"], a: 1 },
    { q: "What is 'Internal Fragmentation' in Paging?", o: ["Last frame partially filled", "Unused holes between partitions", "Table overflow", "Cache miss"], a: 0 },

    // --- DATA STRUCTURES (Trees, AVL, Linked Lists, Stack/Queue) ---
    { q: "Worst-case height of an AVL tree with 'n' nodes is restricted to?", o: ["O(n)", "1.44 log n", "O(log n)", "O(n log n)"], a: 1 },
    { q: "Which traversal of a BST gives elements in descending order?", o: ["Inorder", "Preorder", "Postorder", "Reverse Inorder"], a: 3 },
    { q: "Time complexity to delete a node in a Doubly Linked List, given a pointer to it?", o: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], a: 2 },
    { q: "Number of edges in a Complete Graph with 'n' vertices?", o: ["n(n-1)", "n(n-1)/2", "n^2", "log n"], a: 1 },
    { q: "To implement a Queue using two Stacks, what is the amortized cost of Enqueue?", o: ["O(n)", "O(1)", "O(log n)", "O(n^2)"], a: 1 },
    { q: "What is the result of 'Post-order' traversal if 'Pre-order' is AB?", o: ["AB", "BA", "Depends on Tree", "None"], a: 1 },
    { q: "Circular Queue avoids which problem of Linear Queue?", o: ["Overflow", "Underflow", "Waste of space", "Time complexity"], a: 2 },
    { q: "Which data structure is used to check balanced parentheses?", o: ["Queue", "Tree", "Stack", "Heap"], a: 2 },
    { q: "Worst-case time complexity of searching in a Hash Table with Linear Probing?", o: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], a: 2 },
    { q: "Maximum number of nodes in a Binary Tree of height 'h' (root at h=0)?", o: ["2^h", "2^(h+1) - 1", "2^h - 1", "h^2"], a: 1 },

    // --- DIGITAL LOGIC (Gates, Sequential, Combinational) ---
    { q: "A 4-variable K-Map has how many cells?", o: ["4", "8", "16", "32"], a: 2 },
    { q: "How many select lines are required for a 32:1 Multiplexer?", o: ["3", "4", "5", "6"], a: 2 },
    { q: "Which circuit is used to store 1-bit of data?", o: ["Encoder", "Decoder", "Flip-Flop", "Multiplexer"], a: 2 },
    { q: "What is the output of XOR gate if inputs are A=1, B=1?", o: ["1", "0", "A", "B"], a: 1 },
    { q: "A 'Full Adder' can be implemented using how many Half-Adders?", o: ["1", "2", "3", "4"], a: 1 },
    { q: "The 'Race Around Condition' occurs in which flip-flop?", o: ["SR", "D", "JK", "T"], a: 2 },
    { q: "Which shift register is used for parallel-to-serial conversion?", o: ["SISO", "SIPO", "PISO", "PIPO"], a: 2 },
    { q: "What is the 1's complement of 10110?", o: ["01001", "10111", "01010", "11111"], a: 0 },
    { q: "A 'Decoder' with 'n' input lines will have how many output lines?", o: ["n", "2n", "2^n", "n^2"], a: 2 },
    { q: "Which logic gate is equivalent to a 'Bubbled AND' gate?", o: ["OR", "NAND", "NOR", "XOR"], a: 2 },

    // --- MIXED HARD LOGIC (Algorithms & OS Internal) ---
    { q: "Which sorting algorithm is NOT 'In-place'?", o: ["Selection Sort", "Merge Sort", "Quick Sort", "Insertion Sort"], a: 1 },
    { q: "What is the time complexity of 'Heapsort' in best case?", o: ["O(n)", "O(n log n)", "O(log n)", "O(1)"], a: 1 },
    { q: "A 'Monitor' in OS is a collection of?", o: ["Hardware", "Procedures & Variables", "System Calls", "Registers"], a: 1 },
    { q: "In a min-heap, the third smallest element is at which level?", o: ["Root", "Level 1 or 2", "Last level", "Anywhere"], a: 1 },
    { q: "What is the radix of Octal number system?", o: ["2", "8", "10", "16"], a: 1 },
    { q: "Which interrupt has the highest priority in 8085?", o: ["TRAP", "RST 7.5", "RST 6.5", "INTR"], a: 0 },
    { q: "Size of an IPv4 address in bits?", o: ["32", "64", "128", "16"], a: 0 },
    { q: "Belady's Anomaly is related to which concept?", o: ["CPU Scheduling", "Disk Management", "Page Replacement", "Deadlock"], a: 2 },
    { q: "Which tree must be 'Height Balanced'?", o: ["Binary Tree", "Binary Search Tree", "AVL Tree", "B-Tree"], a: 2 },
    { q: "The logic 'A + A'B' is equal to?", o: ["A", "B", "A+B", "AB"], a: 2 },


            { q: "Find the intercept of line $y = 4x + c$ passing through $(6, -2)$.", o: ["-26", "24", "28", "-28"], a: 0 },
            { q: "The distance between $(0,0)$ and $(3,4)$ is:", o: ["5", "7", "25", "1"], a: 0 },
            { q: "Points $(K, 2-2K)$, $(1-K, 2K)$, and $(-4-K, 6-2K)$ are collinear if $K$ is:", o: ["$1/2, -1$", "$1, 2$", "$0, 1$", "None"], a: 0 },
            { q: "The slope of a line parallel to the x-axis is:", o: ["1", "Undefined", "0", "-1"], a: 2 },
            { q: "Equation of a circle with center $(0,0)$ and radius 5 is:", o: ["$x^2+y^2=5$", "$x^2+y^2=25$", "$x+y=5$", "$x^2-y^2=25$"], a: 1 },
             { q: "Statements: Some stars are moons. All moons are planets. Conclusion: I. Some planets are stars. II. No star is a planet.", o: ["A)Only I", "B)Only II", "C)Both", "D)Neither"], a: 2 },
            { q: "Statements: Most players are tall. Arjun is a player. Conclusion: I. Arjun is tall. II. Arjun is not tall.", o: ["A)Only I", "B)Only II", "C)Either I or II", "D)Neither"], a: 1 },
            { q: "A is B's wife and C is A's sister. D is C's father while E is D's son. What is the relation of E to B?", o: ["A)Brother", "B)Brother-in-law", "C)Cousin",  "D)Father-in-law"], a: 1 },
            { q: "A person goes 5 km East, then 12 km South. How far is he from the starting point?", o: ["A)17KM", "B)13KM", "C)7KM", "D)8KM"], a: 1 },
            { q: "If A is the brother of B; B is the sister of C; and C is the father of D, how A is related to D? ", o: ["A)Brother", "B)Sister", "C)Nephew", "D)Uncle"], a: 3 },
            { q: "A man starts from a point and walks 2 km North, turns towards his right and walks 2 km, turns right again and walks. What is the direction he is facing now?", o: ["A)South", "B)East", "C)North", "D)West"], a: 0 },
            { q: "1, 2, 4, 7, 11, 16, ?", o: ["A)20", "B)21", "C)22", "D)23"], a: 2 },
            { q: "MELT : LIQUID :: FREEZE : ?", o: ["A)ICE", "B)CONDENSE", "C)SOLID", "D)CRYSTAL"], a: 2 },
            { q: "If FISH is written as EHRG, how is JUNGLE written?", o: ["A)ITMFKD", "B)ITNFKD", "C)KVOHMF",  "D)TIMFKD"], a: 0 },
            { q: "Find the wrong number: 8, 13, 21, 32, 47, 63, 83", o: ["A)13", "B)32", "C)47", "D)63"], a: 2 },
            { q: " AZ, BY, CX, ?", o: ["A)DW", "B)EV", "C)DU", "D)DX"], a: 0 },
            { q: "4 : 17 :: 7 : ?", o: ["A)48", "B)49", "C)50", "D)51"], a: 2 }



        ] },
        "Set 9": { pass: "1234", msg: motives[2], questions: [
            // quizData["Set 9"].questions
    // --- ADVANCED OPERATING SYSTEMS (Concurrency, Paging, Scheduling) ---
    { q: "Which of the following conditions is sufficient to prevent deadlock in a system with one instance of each resource type?", o: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait"], a: 3 },
    { q: "What is the primary objective of a Long-Term Scheduler?", o: ["Manage I/O queues", "Select which processes are brought into the ready queue", "Manage swapping", "Allocate CPU to a process"], a: 1 },
    { q: "The time required for the CPU to stop the current process, save its state, and load the new process state is known as?", o: ["Latency", "Throughput", "Context Switch Time", "Burst Time"], a: 2 },
    { q: "In a 'Microkernel' OS design, which component typically resides in user space?", o: ["CPU Scheduler", "Hardware Abstraction Layer", "Device Drivers", "Interrupt Handler"], a: 2 },
    { q: "Which page replacement algorithm can be practically implemented and closely approximates Optimal PR?", o: ["FIFO", "LRU", "MRU", "LIFO"], a: 1 },
    { q: "A system is in an 'unsafe state'. What does this imply?", o: ["Deadlock is imminent", "System is deadlocked", "Deadlock is possible but not guaranteed", "System is safe"], a: 2 },
    { q: "The 'TestAndSet' instruction is a hardware solution used to solve which problem?", o: ["Deadlock prevention", "Critical Section Problem", "Starvation", "Aging"], a: 1 },
    { q: "Which scheduling algorithm is associated with the 'Convoy Effect'?", o: ["SJF", "Round Robin", "Priority", "FCFS"], a: 3 },
    { q: "In Paging, the logical address space size depends on?", o: ["RAM size", "Hard disk size", "Address bus size", "User choice"], a: 2 },
    { q: "Which of these is used for inter-process communication (IPC) via message passing in Unix?", o: ["Semaphore", "Shared Memory", "Pipe", "Monitor"], a: 2 },

    // --- ADVANCED DATA STRUCTURES & ALGORITHMS (Complexity, Trees, Graphs) ---
    { q: "What is the worst-case time complexity of inserting a key into a Binary Search Tree?", o: ["O(log n)", "O(n log n)", "O(n)", "O(1)"], a: 2 },
    { q: "The time complexity of the Floyd-Warshall algorithm for all-pairs shortest paths in a graph with V vertices is?", o: ["O(V^2)", "O(E log V)", "O(V + E)", "O(V^3)"], a: 3 },
    { q: "Which sorting algorithm's best-case time complexity is O(n log n) but can degrade to O(n^2)?", o: ["Merge Sort", "Insertion Sort", "Quick Sort", "Bubble Sort"], a: 2 },
    { q: "Which data structure is typically used for implementing Dijkstra's shortest path algorithm efficiently?", o: ["Stack", "Queue", "Min-Heap (Priority Queue)", "Array"], a: 2 },
    { q: "The balance factor of an AVL tree node can be?", o: ["-1, 0, or 1", "-2, -1, 0, 1, or 2", "Any integer", "0 only"], a: 0 },
    { q: "Which algorithm finds the Minimum Spanning Tree using a greedy approach based on edges?", o: ["Prim's", "Dijkstra's", "Kruskal's", "BFS"], a: 2 },
    { q: "In a max-heap implemented as an array, where can the smallest element be found?", o: ["Always the last element", "Always a leaf node", "At the root", "Anywhere in the lower half"], a: 3 },
    { q: "What is the recurrence relation for the Tower of Hanoi problem?", o: ["T(n) = T(n-1) + 1", "T(n) = 2T(n-1) + 1", "T(n) = 2T(n/2) + n", "T(n) = T(n-1) + n"], a: 1 },
    { q: "Which of the following is an application of the Queue data structure?", o: ["Function call management", "Infix to Postfix conversion", "Level order traversal of a tree", "Undo operation in editor"], a: 2 },
    { q: "The expected average time complexity for searching in a well-implemented Hash Table with chaining is?", o: ["O(n)", "O(log n)", "O(n log n)", "O(1)"], a: 3 },

    // --- ADVANCED DIGITAL LOGIC & CIRCUITS (K-Maps, Sequential, Gates) ---
    { q: "A 4-variable K-Map can group adjacent 1s in groups of size?", o: ["2, 4, 6, 8, 16", "1, 2, 4, 8, 16", "Only powers of 2", "Any number"], a: 2 },
    { q: "Which type of flip-flop is commonly used for frequency division by two?", o: ["SR Flip-flop", "D Flip-flop", "JK Flip-flop in toggle mode", "Latch"], a: 2 },
    { q: "How many 2x1 Multiplexers are needed to construct a 4x1 Multiplexer?", o: ["2", "3", "4", "5"], a: 1 },
    { q: "The logic expression for 'Half Adder Sum' is equivalent to which single gate?", o: ["AND", "OR", "XOR", "XNOR"], a: 2 },
    { q: "In a Master-Slave JK Flip-Flop, what condition does it eliminate?", o: ["Setup time violation", "Hold time violation", "Race-around condition", "Clock skew"], a: 2 },
    { q: "The 2's complement of the binary number 10101 is?", o: ["01010", "01011", "10110", "01101"], a: 1 },
    { q: "Which of the following is NOT a characteristic of Sequential Circuits?", o: ["Uses memory elements (flip-flops)", "Output depends only on current inputs", "Output depends on previous inputs", "Uses clock pulses"], a: 1 },
    { q: "A BCD code uses how many bits to represent a single decimal digit (0-9)?", o: ["3 bits", "4 bits", "5 bits", "8 bits"], a: 1 },
    { q: "The minimum number of NAND gates required to implement an OR gate is?", o: ["2", "3", "4", "1"], a: 2 },
    { q: "Which of these is a 'self-complementing' code?", o: ["BCD", "Binary", "Gray Code", "Excess-3"], a: 3 },
    
    // --- MORE MIXED HARD QUESTIONS ---
    { q: "Which concept helps in breaking Starvation in Priority Scheduling?", o: ["Convoy Effect", "Aging", "Spooling", "Paging"], a: 1 },
    { q: "Which layer of the OSI model is responsible for logical addressing (IP addresses)?", o: ["Data Link", "Network", "Transport", "Physical"], a: 1 },
    { q: "What is the time complexity of the best-case scenario for Quick Sort?", o: ["O(n^2)", "O(n)", "O(n log n)", "O(log n)"], a: 2 },
    { q: "Which condition in Coffman's conditions is impossible to deny in real systems?", o: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Circular Wait"], a: 0 },
    { q: "The minimal sum of products form of a 2 variable K-map expression A'B + AB is?", o: ["A", "B", "A XOR B", "1"], a: 2 },
    { q: "Which data structure is efficient for implementing a compiler's syntax analyzer?", o: ["Queue", "Hash Table", "Stack", "Linked List"], a: 2 },
    { q: "A system call acts as the interface between?", o: ["Hardware and User", "Application and Kernel", "CPU and RAM", "File System and Disk"], a: 1 },
    { q: "In a fully associative cache mapping, where can a main memory block be placed?", o: ["Only one specific location", "Only in a specific set", "Anywhere in the cache", "In a specific block number"], a: 2 },
    { q: "The worst-case complexity for delete operation in an AVL tree is?", o: ["O(n)", "O(1)", "O(n log n)", "O(log n)"], a: 3 },
    { q: "Which type of memory is volatile?", o: ["ROM", "Flash Memory", "Hard Disk", "RAM"], a: 3 },

            { q: "Find the 10th term of AP: 3, 6, 9, ...", o: ["27", "30", "33", "36"], a: 1 }, // 3 + (9)*3 = 30
            { q: "If $\\log_{10} x = 2$, then $x$ is:", o: ["20", "100", "200", "10"], a: 1 },
            { q: "The sum of the first $n$ natural numbers is:", o: ["$n^2$", "$n(n+1)$", "$\\frac{n(n+1)}{2}$", "$2n$"], a: 2 },
            { q: "The roots of $x^2 - 5x + 6 = 0$ are:", o: ["2, 3", "-2, -3", "1, 6", "0, 5"], a: 0 },
            { q: "In a GP, if $a=2, r=3$, find the 3rd term.", o: ["6", "12", "18", "54"], a: 2 },
            //REASIONING
             { q: "Select the word that cannot be formed from 'TRANSFORM':", o: ["A)FORT", "B)ROAM", "C)RAN", "D)TRAIN"], a: 0 },
            { q: "Odd one out:", o: ["A)Wheat", "B)Paddy", "C)Maize", "D)Mustard"], a: 3 },
            { q: "Select the odd one: 2, 3, 5, 7, 9, 11, 13", o: ["A)3", "B)7", "C)9",  "D)13"], a: 1 },
            { q: "Statements: All windows are doors. No door is a wall. Conclusion: I. No window is a wall. II. No wall is a door.", o: ["A)Only I", "B)Only II", "C)Both", "D)Neither"], a: 2 },
            { q: "If you start from point A and walk 4 miles North, then 3 miles East, what is the straight distance back to A? ", o: ["A)7 miles", "B)5 miles", "C)1 mile", "D)12 mile"], a: 1 },
            { q: "A is the son of C; C and Q are sisters; Z is the mother of Q and P is the son of Z. Which statement is correct?", o: ["A)P and A are cousins", "B)B) P is the maternal uncle of A", "C)Q is the grandfather of A", "D)C and P are sisters"], a: 1 },
            { q: "If FRIEND is coded as HTKGPF, then REVEAL is?", o: ["A)TGXGCN", "B)TGXCFN", "C)TGXGCP", "D)TGXGCN"], a: 0 },
            { q: "Odd one out: 10, 25, 45, 54, 60, 75", o: ["A)25", "B)45", "C)54", "D)75"], a: 2 },
            { q: "CUP : LIP :: BIRD : ?", o: ["A)BUSH", "B)GRASS", "C)FOREST",  "D)BEAK"], a: 3 },
            { q: "If PALE is 2134 and EARTH is 41590, what is PEARL?", o: ["A)24153", "B)25413", "C)24135", "D)24150"], a: 0 },
            { q: " ZA5, YB4, XC3, WD2, ?", o: ["A)VE1", "B)VE3", "C)UE1", "D)VI1"], a: 0 },
            { q: "If A=2, B=4, C=6, then what is the sum of letters for CAKE?", o: ["A)20", "B)38", "C)44", "D)50"], a: 3 }



        ] },
        "Set 10": { pass: "1234", msg: motives[3], questions: [
            // quizData["Set 10"].questions
    // --- Set 10: Operating Systems (Advanced/Mixed) ---
    { q: "In the Paging model, 'Internal Fragmentation' is calculated as the total unused space in the last frame of every process's address space.", o: ["True", "False"], a: 0 },
    { q: "Which component of the OS keeps track of who is using which part of the memory, disk space, and all files/directories?", o: ["Process Manager", "CPU Scheduler", "Resource Manager / File Manager", "Networking Manager"], a: 2 },
    { q: "What is a 'Spinlock'?", o: ["A type of physical lock on hard disk", "A lock that involves busy waiting (looping)", "A lock that forces immediate context switch", "A memory access protection mechanism"], a: 1 },
    { q: "If a system has 5 processes and 3 tape drives (maximum need per process is 3, current allocation is 1 each), can a deadlock occur?", o: ["Yes", "No", "Maybe, depends on scheduler", "Only in FCFS"], a: 1 },
    { q: "Which scheduling objective aims to maximize CPU usage over a period of time?", o: ["Response Time", "Throughput", "Latency", "Turnaround Time"], a: 1 },
    { q: "What is the primary role of the 'System Call Interface'?", o: ["Interface for user programs to request kernel services", "Interface between hardware and kernel", "Interface between kernel and memory", "Interface for networking protocols"], a: 0 },
    { q: "Which RAID level uses disk striping with parity information distributed across all drives?", o: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"], a: 2 },
    { q: "What is the main reason for using a 'Microkernel' architecture?", o: ["Faster execution speed", "Increased reliability and security", "Simpler device driver coding", "Lower memory consumption"], a: 1 },
    { q: "Which type of fragmentation cannot be solved by defragmentation tools?", o: ["External Fragmentation", "Internal Fragmentation"], a: 1 },
    { q: "Which mechanism ensures that if any process holds one resource, it cannot request another resource simultaneously?", o: ["Mutual Exclusion", "No Preemption", "Hold and Wait (Denial of)", "Circular Wait (Denial of)"], a: 2 },

    // --- Set 10: DSA (Advanced/Mixed) ---
    { q: "What is the time complexity of Dijkstra's algorithm if implemented using an array (not a heap)?", o: ["O(E log V)", "O(V^3)", "O(V+E)", "O(V^2)"], a: 3 },
    { q: "Which traversal technique of a binary tree visits the right child, then the root, then the left child?", o: ["Pre-order", "In-order", "Post-order", "Reverse In-order"], a: 3 },
    { q: "The worst-case scenario for Quick Sort occurs when the pivot is always chosen as?", o: ["The middle element", "A random element", "The smallest/largest element", "The median element"], a: 2 },
    { q: "Which sorting algorithm performs best on nearly sorted data, with O(n) in the best case?", o: ["Merge Sort", "Quick Sort", "Insertion Sort", "Selection Sort"], a: 2 },
    { q: "A 'Trie' data structure is primarily used for efficient?", o: ["Sorting numbers", "Searching strings by prefix", "Graph traversal", "Implementing hash functions"], a: 1 },
    { q: "What is the amortized time complexity of deleting an element from a dynamically allocated hash map using chaining?", o: ["O(n)", "O(log n)", "O(1)", "O(n log n)"], a: 2 },
    { q: "In a Red-Black tree, which color is used to maintain balance and ensure no long paths exist?", o: ["Blue", "Green", "Red/Black", "White"], a: 2 },
    { q: "What is the minimum number of nodes in an AVL tree of height 3?", o: ["7", "14", "4", "2"], a: 2 },
    { q: "The number of edges in a directed acyclic graph (DAG) with N vertices must be less than or equal to?", o: ["N^2", "N!", "N * (N-1) / 2", "V^2"], a: 3 },
    { q: "What problem does the 'Union-Find' data structure solve efficiently?", o: ["Shortest path finding", "Sorting a list", "Checking graph connectivity/cycles", "String searching"], a: 2 },

    // --- Set 10: Digital Logic & Architecture (Advanced/Mixed) ---
    { q: "Which type of memory uses transparent latches (D-latches) in its internal structure?", o: ["SRAM", "DRAM", "ROM", "Flash"], a: 0 },
    { q: "The output of a 3-input NAND gate is HIGH only when:", o: ["All inputs are HIGH", "All inputs are LOW", "At least one input is LOW", "Inputs are different"], a: 2 },
    { q: "A 'Ripple Counter' suffers from what main limitation compared to a synchronous counter?", o: ["Higher power consumption", "Lower counting range", "Accumulated propagation delay (slower speed)", "More complex design"], a: 2 },
    { q: "What is the primary function of a 'Comparator' IC like 7485?", o: ["Add two binary numbers", "Determine equality/magnitude difference between numbers", "Select one input from many", "Convert binary to decimal"], a: 1 },
    { q: "Which hazard (glitch) occurs due to the timing difference of a signal passing through two different paths to reach the output?", o: ["Static Hazard", "Dynamic Hazard", "Essential Hazard", "Function Hazard"], a: 0 },
    { q: "A BCD-to-Decimal decoder converts a 4-bit input into how many output lines?", o: ["4", "8", "10", "16"], a: 2 },
    { q: "The 'Figure of Merit' of a logic family is a product of speed (propagation delay) and what other metric?", o: ["Noise Margin", "Fan-out", "Power dissipation", "Operating voltage"], a: 2 },
    { q: "How many cycles does it take for a 4-bit SIPO (Serial In, Parallel Out) register to fully load 4 bits of data?", o: ["1", "2", "3", "4"], a: 3 },
    { q: "What is the hexadecimal representation of the decimal number 255?", o: ["FF", "0F", "FE", "EF"], a: 0 },
    { q: "Which computer architecture approach executes multiple instructions by overlapping the fetch, decode, execute, and write-back stages?", o: ["Von Neumann Architecture", "Harvard Architecture", "Pipelining", "Parallel Processing"], a: 2 },
    { q: "Which type of memory is typically used as the CPU registers due to its extremely high speed and use of flip-flops?", o: ["DRAM", "SRAM", "ROM", "Flash"], a: 1 },
    { q: "The logic expression A + A'B simplifies to?", o: ["A+B", "AB", "A", "B"], a: 0 },
    { q: "What does the 'Enable' pin do on many ICs like Decoders or Muxes?", o: ["Increases speed", "Turns the chip ON/OFF (Active high or low)", "Selects an input line", "Provides clock signal"], a: 1 },
    { q: "Which number system has a base of 16?", o: ["Binary", "Octal", "Decimal", "Hexadecimal"], a: 3 },
    { q: "Which pin in 8085 is used to acknowledge an interrupt request on the INTR pin?", o: ["TRAP", "INTA", "RST 7.5", "HOLD"], a: 1 },
    { q: "Which code uses a 4-bit value to represent a decimal digit, but adds 3 to the 8421 representation?", o: ["Gray Code", "Excess-3", "BCD", "Hamming Code"], a: 1 },
    { q: "Which type of Flip-Flop has a 'race-around condition' eliminated by using a Master-Slave configuration?", o: ["SR FF", "D FF", "T FF", "JK FF"], a: 3 },
    { q: "A synchronous counter has all flip-flops clocked simultaneously. This improves which metric?", o: ["Cost", "Power consumption", "Maximum operating frequency (speed)", "Design simplicity"], a: 2 },
    { q: "The output of an XNOR gate is HIGH when:", o: ["Inputs are different", "Both inputs are Low", "Both inputs are High", "Both B and C"], a: 3 },
    { q: "The 'setup time' of a flip-flop is the minimum time the data input must be stable before the clock transition.", o: ["True", "False"], a: 0 },

            { q: "Binary $(1010)_2$ is equal to which decimal?", o: ["8", "9", "10", "11"], a: 2 },
            { q: "Which data structure uses FIFO?", o: ["Stack", "Queue", "Tree", "Graph"], a: 1 },
            { q: "Evaluate $\\lim_{x \\to 0} \\frac{\\sin x}{x}$.", o: ["0", "1", "$\\infty$", "Undefined"], a: 1 },
            { q: "What is $n(P(A))$ if $n(A) = 3$?", o: ["3", "6", "8", "9"], a: 2 },
            { q: "The derivative of $\\cos x$ is:", o: ["$\\sin x$", "$-\\sin x$", "$\\tan x$", "$1$"], a: 1 },
            //REASIONING
             { q: "", o: ["A)", "B)", "C)", "D)"], a: 1 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 2 },
            { q: "", o: ["A)", "B)", "C)",  "D)"], a: 1 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 0 },
            { q: " ", o: ["A)", "B)", "C)", "D)"], a: 2 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 1 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 1 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 2 },
            { q: "", o: ["A)", "B)", "C)",  "D)"], a: 1 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 0 },
            { q: " ", o: ["A)", "B)", "C)", "D)"], a: 2 },
            { q: "", o: ["A)", "B)", "C)", "D)"], a: 1 }



        ] }
    };

    let activeSet = null, curr = 0, userAns = [], qStatus = [], timeLeft = 5400;

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
        document.getElementById("exam-screen").style.display = "none"; document.getElementById("result-screen").style.display = "flex";
        let total = 0, correct = 0, wrong = 0, skipped = 0, cs = 0, math = 0, reason = 0;
        userAns.forEach((ans, i) => {
            const actual = quizData[activeSet].questions[i]?.a;
            if(ans === null) skipped++;
            else if(ans === actual) { correct++; total += 4; if(i<40) cs+=4; else if(i<63) math+=4; else reason+=4; }
            else { wrong++; total -= 1; if(i<40) cs-=1; else if(i<63) math-=1; else reason-=1; }
        });
        document.getElementById("final-total").innerText = total; document.getElementById("score-cs").innerText = cs;
        document.getElementById("score-math").innerText = math; document.getElementById("score-reason").innerText = reason;
        document.getElementById("result-motive").innerText = quizData[activeSet].msg;
    }
    initHome();