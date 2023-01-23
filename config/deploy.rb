# config valid only for current version of Capistrano

set :application, 'ScratchShark_Frontend'
##set :repo_url, 'git@git.sibers.com:sibers/scratchshark-frontend.git'

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: 'log/capistrano.log', color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
set :keep_releases, 3

namespace :deploy do
    task :install_and_build do
        build_command = fetch(:build_command)
        on roles(:app) do
            run_locally do
                execute(:npm, "install")
                execute(:npm, "run #{build_command}")
            end
        end
    end

    task :create_symlink_to_web do
        on roles(:app) do
            execute(:ln, "-sfn", "#{current_path}", "#{deploy_to}/web")
        end
    end
end

before   "deploy:starting",     "deploy:install_and_build"
after    "deploy:finished",     "deploy:create_symlink_to_web"
