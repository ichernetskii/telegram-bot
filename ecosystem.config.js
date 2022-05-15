module.exports = {
    apps: [{
        name: "telegram-bot",
        script: "yarn run prod:start",
        error_file: "err.log",
        out_file: "out.log",
        log_file: "combined.log",
        autorestart: true,
        watch: false,
        instance_var: "5050",
        append_env_to_name: true
    }]
}
