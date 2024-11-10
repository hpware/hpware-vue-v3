// Import Github Client ID and Secret
const Github_Client_ID = import.meta.env.Github_Client_ID;
const Github_Client_Secret = import.meta.env.Github_Client_Secret;

// PassportJS
passport.use(new GitHubStrategy({
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOrCreate({ githubId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));