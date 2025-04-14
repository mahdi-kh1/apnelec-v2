/**
 * Generates a signature token for an installation
 * @param installationId The ID of the installation
 * @returns A base64 encoded token containing the installation ID and timestamp
 */
export function generateSignatureToken(installationId: number): string {
  return Buffer.from(`${installationId}-${Date.now()}`).toString('base64');
}

/**
 * Validates a signature token and extracts the installation ID
 * @param token The signature token to validate
 * @returns The installation ID if valid, null otherwise
 */
export function validateSignatureToken(token: string): number | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const [installationId] = decoded.split('-');
    return parseInt(installationId);
  } catch {
    return null;
  }
} 