import java.util.Scanner;

public class CircleArea {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Circle ka radius likhein: ");
        double r = sc.nextDouble();
        
        double area = 3.14 * r * r;
        System.out.println("Circle ka Area hai: " + area);
        sc.close();
    }
}