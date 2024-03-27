package com.example.api.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseToken;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FirebaseService {
    public static FirebaseToken verify(String token) throws Exception {
        try {
            return FirebaseAuth.getInstance().verifyIdToken(token);
        } catch (Exception e) {
            throw new Exception("Token verification failed", e);
        }
    }
}
