import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.UUID;

class User {
    String username;
    String password;
    Map<String, String> uploadedFiles;  // File code to file name mapping

    public User(String username, String password) {
        this.username = username;
        this.password = password;
        this.uploadedFiles = new HashMap<>();
    }
}

public class FileSharingApp {
    private static Map<String, User> users = new HashMap<>();
    private static Map<String, String> fileStorage = new HashMap<>();

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("1. Register\n2. Login\n3. Exit");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    registerUser(scanner);
                    break;
                case 2:
                    loginUser(scanner);
                    break;
                case 3:
                    System.out.println("Exiting...");
                    System.exit(0);
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void registerUser(Scanner scanner) {
        System.out.println("Enter username:");
        String username = scanner.next();
        System.out.println("Enter password:");
        String password = scanner.next();

        User user = new User(username, password);
        users.put(username, user);
        System.out.println("Registration successful!");
    }

    private static void loginUser(Scanner scanner) {
        System.out.println("Enter username:");
        String username = scanner.next();
        System.out.println("Enter password:");
        String password = scanner.next();

        User user = users.get(username);

        if (user != null && user.password.equals(password)) {
            handleLoggedInUser(scanner, user);
        } else {
            System.out.println("Invalid username or password. Please try again.");
        }
    }

    private static void handleLoggedInUser(Scanner scanner, User user) {
        while (true) {
            System.out.println("1. Upload File\n2. View Uploaded Files\n3. Remove File\n4. Logout");
            int choice = scanner.nextInt();

            switch (choice) {
                case 1:
                    uploadFile(scanner, user);
                    break;
                case 2:
                    viewUploadedFiles(user);
                    break;
                case 3:
                    removeFile(scanner, user);
                    break;
                case 4:
                    System.out.println("Logging out...");
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }

    private static void uploadFile(Scanner scanner, User user) {
        System.out.println("Enter file name:");
        String fileName = scanner.next();

        String fileCode = generateFileCode();
        user.uploadedFiles.put(fileCode, fileName);
        fileStorage.put(fileCode, fileName);

        System.out.println("File uploaded successfully. File code: " + fileCode);
    }

    private static void viewUploadedFiles(User user) {
        System.out.println("Uploaded Files:");
        for (Map.Entry<String, String> entry : user.uploadedFiles.entrySet()) {
            System.out.println("File Code: " + entry.getKey() + ", File Name: " + entry.getValue());
        }
    }

    private static void removeFile(Scanner scanner, User user) {
        System.out.println("Enter file code to remove:");
        String fileCode = scanner.next();

        if (user.uploadedFiles.containsKey(fileCode)) {
            String fileName = user.uploadedFiles.remove(fileCode);
            fileStorage.remove(fileCode);
            System.out.println("File " + fileName + " removed successfully.");
        } else {
            System.out.println("Invalid file code. Please try again.");
        }
    }

    private static String generateFileCode() {
        // Generating a random 6-digit code using UUID
        String uuid = UUID.randomUUID().toString().replaceAll("-", "");
        return uuid.substring(0, 6);
    }
}
