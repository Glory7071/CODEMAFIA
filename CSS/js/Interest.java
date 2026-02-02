import  java.util.Scanner;

public class Interest {
      public static void main(String[] args) {
         Scanner sc = new Scanner(System.in);
         System.out.print("Principal (P)");
         double p = sc.nextDouble();
         System.out.print("Rate (R)");
         double r = sc.nextDouble();
         System.out.print("Time (T)");
         double t = sc.nextDouble();
         
         double si = (p * r * t) / 100;
         System.out.println("Simple interest is :" + si);
         sc.close();

    }
}
