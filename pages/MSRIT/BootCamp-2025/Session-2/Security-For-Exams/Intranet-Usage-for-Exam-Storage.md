# Intranet Usage for Exam Storage

## Secure Storage of Student Data on Shared Network
Ensuring the security and integrity of student exam data is crucial when using an intranet for storage. The following measures outline how student data will be stored and accessed securely during exams:

### 1. Centralized Storage System
- A dedicated file server within the intranet will store exam files.
- Structured directories for different subjects, batches, and exam dates.
- Access control mechanisms will be applied to prevent unauthorized modifications.

### 2. User Authentication and Role-Based Access Control (RBAC)
- Multi-factor authentication (MFA) for faculty members uploading exam data.
- Students have read-only access to exam-related materials where applicable.
- Admins, teachers, and IT staff have different levels of access based on their roles.

## Security Measures

### 1. Encryption of Exam Files and Folders
- All exam files will be encrypted using AES-256 encryption before being uploaded.
- Encrypted transmission using SSL/TLS for secure file transfers.
- File integrity verification using hash functions (SHA-256) to detect unauthorized changes.

### 2. Restricting File Operations During Exam Periods
- **Read-Only Access:** Exam files will be set to read-only mode during exam hours.
- **Copy Restrictions:** Disabling file copy, print, or screenshot functions using group policy settings.
- **Automatic Locking:** Files and folders will auto-lock after a designated time to prevent post-exam access.

### 3. Network and System Security
- Firewall rules to restrict unauthorized access to exam files.
- Intrusion Detection Systems (IDS) to monitor suspicious activity.
- Regular security audits and vulnerability assessments.

### 4. Logging and Monitoring
- Logging all file access attempts with timestamps.
- Real-time alerts for unauthorized access attempts.
- Periodic reports for audit purposes.

By implementing these measures, the intranet-based exam storage system will ensure security, integrity, and controlled access, preventing data breaches and unauthorized modifications.

