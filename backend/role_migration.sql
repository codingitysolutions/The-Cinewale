-- Add role and permissions columns
ALTER TABLE admin_credentials ADD COLUMN role TEXT DEFAULT 'admin';
ALTER TABLE admin_credentials ADD COLUMN permissions TEXT DEFAULT 'all';

-- Update the main admin just in case
UPDATE admin_credentials SET role = 'admin', permissions = 'all' WHERE id = 1;

-- Insert the requested employee account
INSERT INTO admin_credentials (username, password, role, permissions) 
VALUES ('nrusinghapatratcw@gmail.com', 'Thecinewale@123', 'employee', '["bookings"]');
