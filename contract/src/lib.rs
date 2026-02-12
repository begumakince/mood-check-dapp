#![no_std]
use soroban_sdk::{contract, contractimpl, Env, String, Address};

#[contract]
pub struct MoodContract;

#[contractimpl]
impl MoodContract {
    pub fn set_mood(env: Env, user: Address, mood: String) {
        user.require_auth();
        env.storage().persistent().set(&user, &mood);
    }

    pub fn get_mood(env: Env, user: Address) -> Option<String> {
        env.storage().persistent().get(&user)
    }
}
