@rewardings.each do |rewarding|
  json.set! rewarding.id do
    json.partial! 'rewarding', rewarding: rewarding
  end
end
