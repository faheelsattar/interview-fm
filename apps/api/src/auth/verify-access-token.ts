import { supabaseAuthClient } from "../infrastructure/config/supabase";
import type { AuthenticatedUser } from "./types";

// Helper for verifying the token via supabase auth.
export async function verifyAccessToken(token: string): Promise<AuthenticatedUser | null> {
    const {
        data: { user },
        error,
    } = await supabaseAuthClient.auth.getUser(token);

    if (error || !user) {
        return null;
    }

    return {
        id: user.id,
    };
}