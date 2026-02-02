import java.util.*;

public class Name { // Class ka naam file ke naam jaisa rakhein
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter your name: "); // User ko pata chale ki kya type karna hai
        String name = sc.nextLine();

        System.out.println("enter your roll number");
        int number = sc.nextInt();

        System.out.println("\n--your details--");
        System.out.println("Your name is: " + name);
        System.out.println("Roll:" + number);
        
        sc.close(); // Scanner ko close karna achi practice hai
    }
}