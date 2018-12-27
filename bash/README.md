[Example]( https://imgur.com/gallery/HdDM3RS)

# Start-Page
Start page made after a linux terminal with functional commands for shortcuts and searches.
It should work with all modern browsers, however I'm mainly using firefox and can't guarantee that everything
looks nice on other browsers.

Directories are supposed to serve as bookmark categories and 'files' as bookmarks/links.

for navigation commands both absolute and relative paths are supported, only paths like
"cd ../dir/" are not supported atm.

Same goes for mkdir, rmdir, touch, and rm.

I added an option to autocomplete directories with tab in much the same style in which it is done in some unix systems (cycle through suggestions with tab). This means that you can't select links with tab anymore. This won't be a problem since I will add the autocomplete also for files, so you can open a link by typing its first letters and completing it with tab. I think this is more natural anyways in a terminal environment.

the "ls" command can list contents of an absolute path or a relative path in the subdirectory of the current location

You can open a link simply by tiping its name as a command. Currently you can type the name of any link in any directory. I might have to restrict link names to names that are not used as a command in order to prevent interference.

Commands supported:
Touch [name] [url] (create link in current dir)

echo [Sentence]

mkdir [name]

rmdir [name]

rm [name]

ls

clear

cd | cd .. | cd [path]

locate [query](duckduckgo search)

Fancy system information with 'fetch' and set your username with 'useradd'

Links and directories are saved to the local storage now, if there is no config found
in local storage the page will just create an empty home directory

# Planned additions

I plan on giving some color options for links although I like having files/directories on a clearly distinct color.


## Planned commands
notes - quick way of adding notes/todos and removing them. Not sure how I plan on displaying it for now.




## Credits

Insipired by u/Jarvvski's post on the r/startpages subreddit

Autocomplete plugin altered from here: https://github.com/erming/tabcomplete
