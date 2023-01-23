# Custom config paths ( variables MUST be set before 'capistrano/setup' )
set :deploy_config_path,    'config/deploy.rb'
set :stage_config_path,     'config/deploy'

# Load DSL and set up stages
require "capistrano/setup"

# Include default deployment tasks
require "capistrano/deploy"

require "capistrano/scm/rsync"
install_plugin Capistrano::SCM::Rsync

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }
