Login with Devise using Linkedin and Omniauth

#### Setup RVM & Gems

First install rvm

    $ bash < <( curl http://rvm.beginrescueend.com/releases/rvm-install-head )

and Ruby 2.1.1
    
    $rvm use ruby-2.1.0
    Using /Users/aarti/.rvm/gems/ruby-2.1.0
    $ruby -v
    ruby 2.1.0p0 (2013-12-25 revision 44422)

    To manage the gems we want to create a new gemset just for the application

    $ rvm gemset create devise-linkedin

and use it 

    $ rvm use ruby-2.1.0@devise-linkedin
    Using /Users/aarti/.rvm/gems/ruby-2.1.0 with gemset reports


With that out of the way we can install the needed gems using [bundler][2] 

    $ bundle install