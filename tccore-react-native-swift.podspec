require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name = "tccore-react-native-swift"
  s.version = package["version"]
  s.summary = package["description"]
  s.description = <<-DESC
                  Commanders Act React Native Bridge
                   DESC
  s.homepage = "https://github.com/commandersact/tccore-react-native"
  s.license = { :type => "Commercial", :file => "LICENSE" }
  s.authors = { "CommandersAct" => "mobile@commandersact.com" }
  s.platforms = { :ios => "11.0" }
  s.source = { :git => "https://github.com/commandersAct/tccore-react-native.git", :tag => package["version"] }
  s.source_files = "ios/**/*.{swift}"
  s.requires_arc = true
  s.swift_version = "5.0"
  s.pod_target_xcconfig = { 'DEFINES_MODULE' => 'YES' }

  s.dependency 'tccore-react-native'
  s.dependency 'IOSV5-TCCore', '5.3.1'

end

