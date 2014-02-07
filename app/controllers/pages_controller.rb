class PagesController < ApplicationController
  def home
  end

  def link_extractor
    require 'pismo'
 
    # You might want to check for a valid URL here or do that before sending
    # the AJAX request. Ideally the AJAX request should only be sent when 
    # a valid URL is detected in the text box
    @url = params[:url]
 
    unless @url.blank?
      @url = @url.split("//")
      # Add http:// to the url if the user hasn't 
      if not (@url[0] == "http:" or @url[0] == "https:")
        @url = "http://" + params[:url]
      else
        @url = params[:url]
      end
    end
 
    begin
      @doc = MetaInspector.new(@url)
      @title = @doc.title
      @description = @doc.description
      @images = @doc.images
    rescue
      @title = ""
      @images = ""
      @description = ""
    end
    # Render a js.erb file that displays the required information
    respond_to do | format |  
      format.js 
    end
    # render json: {doc: @doc}
  end
end
