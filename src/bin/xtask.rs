use std::process::{Command, ExitCode};

fn run(program: &str, args: &[&str]) -> ExitCode {
    match Command::new(program)
        .current_dir(env!("CARGO_MANIFEST_DIR"))
        .args(args)
        .status()
    {
        Ok(status) => ExitCode::from(status.code().unwrap_or(1) as u8),
        Err(error) => {
            eprintln!("failed to run {program}: {error}");
            ExitCode::FAILURE
        }
    }
}

fn main() -> ExitCode {
    match std::env::args().nth(1).as_deref() {
        Some("serve") => {
            let open = std::env::args().any(|arg| arg == "--open");
            if open {
                run("trunk", &["serve", "--open"])
            } else {
                run("trunk", &["serve"])
            }
        }
        Some("build") => run("trunk", &["build"]),
        Some("tailwind") => run(
            "tailwindcss",
            &["--input", "index.css", "--output", "style.css", "--minify"],
        ),
        _ => {
            eprintln!("usage: cargo xtask <serve [--open]|build|tailwind>");
            ExitCode::FAILURE
        }
    }
}
